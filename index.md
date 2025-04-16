---
layout: default
title: "Data Analytics Portfolio"
---

<style>
body {
  background-color: #ffffff;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.8;
  margin: 0;
  padding: 0 30px;
  max-width: 1100px;
}

.page-header {
  background-color: #ffffff !important;
  color: #1d1d1f !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.page-header h1 {
  color: #000000 !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.wrapper {
  max-width: 1100px !important;
  padding: 30px !important;
}

h1 {
  font-size: 42px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: #000;
}

h2 {
  font-size: 28px;
  font-weight: 500;
  color: #333;
  margin-top: 40px;
}

a {
  color: #007aff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.view-work-button {
  background-color: #007aff;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-bottom: 10px;
  display: inline-block;
}

.view-work-button:hover {
  background-color: #005ecb;
}

.tech-card {
  width: 120px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background: white;
  transition: all 0.2s ease-in-out;
}

.tech-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.tech-label {
  margin-top: 10px;
  font-size: 14px;
}

img {
  max-width: 100%;
  border-radius: 8px;
  margin-top: 10px;
}

.bounce-arrow {
  font-size: 24px;
  margin-top: 10px;
  animation: bounce 2s infinite;
  transition: opacity 0.5s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(4px);
  }
}

.bounce-arrow.hide {
  opacity: 0;
  pointer-events: none;
}

* {
  transition: all 0.2s ease-in-out;
}
</style>

<script>
  window.addEventListener('scroll', function() {
    var arrow = document.querySelector('.bounce-arrow');
    if (window.scrollY > 100) {
      arrow.classList.add('hide');
    } else {
      arrow.classList.remove('hide');
    }
  });
</script>

<!-- rest of your index content remains unchanged -->
