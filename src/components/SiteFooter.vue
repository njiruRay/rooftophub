<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-contact-item">
        <div class="footer-icon-circle">
          <i class="bi bi-geo-alt-fill"></i>
        </div>
        <p>State House Crescent, Nairobi, Kenya</p>
      </div>

      <div class="footer-contact-item">
        <div class="footer-icon-circle">
          <i class="bi bi-telephone-fill"></i>
        </div>
        <p>+254-(0)20-2724804</p>
      </div>

      <div class="footer-contact-item">
        <div class="footer-icon-circle">
          <i class="bi bi-envelope-fill"></i>
        </div>
        <p>aaymcas@africaymca.org</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-copy">Copyright © {{ currentYear }} Rooftop. All Right Reserved</p>

      <div class="footer-socials">
        <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" aria-label="Twitter/X"><i class="bi bi-twitter-x"></i></a>
        <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
        <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
        <a href="#" aria-label="Email"><i class="bi bi-envelope"></i></a>
      </div>
    </div>
  </footer>

  <a
    class="whatsapp-float"
    href="https://wa.link/2irzlx"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <i class="bi bi-whatsapp"></i>
  </a>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>