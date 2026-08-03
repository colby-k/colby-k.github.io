(function () {
  'use strict';

  var config = window.portfolioAnalyticsConfig || {};
  var measurementId = config.measurementId;

  if (!measurementId || typeof window.gtag !== 'function') return;

  var analyticsRequested = false;
  var interactionEvents = ['pointerdown', 'keydown', 'touchstart', 'scroll'];

  function removeInteractionListeners() {
    interactionEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, loadAnalytics);
    });
  }

  function loadAnalytics() {
    if (analyticsRequested) return;

    analyticsRequested = true;
    removeInteractionListeners();

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    script.onerror = function () {
      analyticsRequested = false;
    };
    document.head.appendChild(script);
  }

  window.portfolioLoadAnalytics = loadAnalytics;

  function cleanText(value, maxLength) {
    return String(value || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, maxLength || 120);
  }

  function normalizePath(pathname) {
    var path = String(pathname || '/').toLowerCase();
    return path.length > 1 ? path.replace(/\/+$/, '/') : '/';
  }

  function linkLocation(anchor) {
    var section = anchor.closest('section');
    if (!section) return 'page';
    if (section.id) return section.id;

    var className = typeof section.className === 'string' ? section.className : '';
    return cleanText(className.split(/\s+/)[0] || 'section', 80);
  }

  function trackEvent(eventName, parameters, options) {
    var payload = {
      page_path: window.location.pathname,
      page_title: document.title
    };

    Object.keys(parameters || {}).forEach(function (key) {
      if (parameters[key] !== undefined && parameters[key] !== null && parameters[key] !== '') {
        payload[key] = parameters[key];
      }
    });

    window.gtag('event', eventName, payload);

    if (!options || options.load !== false) {
      loadAnalytics();
    }
  }

  window.portfolioTrackEvent = trackEvent;

  function contentMetadata(pathname) {
    var path = normalizePath(pathname);
    var content = {
      '/leadership/': ['professional_positioning', 'leadership'],
      '/audit-impact/': ['professional_positioning', 'audit_impact'],
      '/auditticks-pro/': ['product', 'auditticks_pro'],
      '/audit-intelligence/': ['innovation_lab', 'innovation_lab_overview'],
      '/access-conflict-explorer/': ['innovation_application', 'access_conflict_explorer'],
      '/vendor-relationship-intelligence/': ['innovation_application', 'vendor_relationship_intelligence'],
      '/control-evidence-lab/': ['innovation_application', 'control_evidence_lab']
    };

    if (!content[path]) return null;

    return {
      content_group: content[path][0],
      content_name: content[path][1]
    };
  }

  function innovationApplication(pathname) {
    var path = normalizePath(pathname);
    var applications = {
      '/access-conflict-explorer/': 'access_conflict_explorer',
      '/vendor-relationship-intelligence/': 'vendor_relationship_intelligence',
      '/control-evidence-lab/': 'control_evidence_lab'
    };

    return applications[path] || null;
  }

  function fileExtension(pathname) {
    var match = String(pathname || '').match(/\.([a-z0-9]+)$/i);
    return match ? match[1].toLowerCase() : '';
  }

  function fileName(pathname) {
    var parts = String(pathname || '').split('/');
    return decodeURIComponent(parts[parts.length - 1] || '');
  }

  function classifyLink(anchor) {
    var rawHref = anchor.getAttribute('href');
    if (!rawHref || /^(#|mailto:|tel:|javascript:)/i.test(rawHref)) return null;

    var url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch (error) {
      return null;
    }

    var path = normalizePath(decodeURIComponent(url.pathname));
    var host = url.hostname.toLowerCase();
    var sameHost = host === window.location.hostname.toLowerCase();
    var parameters = {
      link_text: cleanText(anchor.textContent, 100),
      link_url: url.href,
      link_location: linkLocation(anchor),
      source_path: window.location.pathname
    };

    if (path === '/assets/docs/resume.pdf') {
      return { name: 'resume_view', parameters: parameters };
    }

    if (path === '/assets/img/user guide.png') {
      return { name: 'auditticks_user_guide_view', parameters: parameters };
    }

    if (host === 'www.linkedin.com' || host === 'linkedin.com') {
      return {
        name: normalizePath(window.location.pathname) === '/auditticks-pro/'
          ? 'auditticks_product_discussion_click'
          : 'linkedin_profile_click',
        parameters: parameters
      };
    }

    var application = innovationApplication(path);
    if (sameHost && application) {
      parameters.app_name = application;
      return { name: 'innovation_app_launch', parameters: parameters };
    }

    if (sameHost && path === '/auditticks-pro/') {
      return { name: 'auditticks_interest_click', parameters: parameters };
    }

    if (sameHost && path === '/leadership/') {
      return { name: 'leadership_navigation_click', parameters: parameters };
    }

    if (sameHost && path === '/audit-impact/') {
      return { name: 'audit_impact_navigation_click', parameters: parameters };
    }

    var extension = fileExtension(url.pathname);
    if (sameHost && /^(pdf|xlsx|xlsm|xlsb|csv|zip|txt|docx|pptx)$/.test(extension)) {
      parameters.file_name = fileName(url.pathname);
      parameters.file_extension = extension;
      return { name: 'resource_download', parameters: parameters };
    }

    if (!sameHost && /^https?:$/i.test(url.protocol)) {
      parameters.link_domain = host;
      return { name: 'outbound_click', parameters: parameters };
    }

    return null;
  }

  var pageContent = contentMetadata(window.location.pathname);
  if (pageContent) {
    trackEvent('portfolio_content_view', pageContent, { load: false });
  }

  document.addEventListener('click', function (event) {
    if (event.defaultPrevented) return;
    if (typeof event.button === 'number' && event.button !== 0) return;

    var target = event.target;
    var anchor = target && target.closest ? target.closest('a[href]') : null;
    if (!anchor) return;

    var trackedLink = classifyLink(anchor);
    if (trackedLink) {
      trackEvent(trackedLink.name, trackedLink.parameters);
    }
  });

  interactionEvents.forEach(function (eventName) {
    window.addEventListener(eventName, loadAnalytics, {
      once: true,
      passive: true
    });
  });

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadAnalytics, { timeout: 4000 });
  } else {
    window.setTimeout(loadAnalytics, 4000);
  }
}());
