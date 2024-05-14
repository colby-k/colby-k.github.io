---
layout: default
title: Home
---

<header class="contact">
  <div class="container">
    <h2>Contact Me</h2>
    <p>If you would like to get in touch, please fill out the form below or reach out to me via email at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>

    <form action="https://formspree.io/{{ site.email }}" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="_replyto" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>

    <p>You can also find me on <a href="https://www.linkedin.com/in/{{ site.linkedin }}" target="_blank">LinkedIn</a>.</p>
  </div>
</header>
