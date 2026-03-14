<template>
  <section class="about-page">
    <section class="about-hero">
      <div
        class="about-hero-bg"
        :style="{ backgroundImage: `url(${heroImage})` }"
      ></div>
      <div class="about-hero-overlay"></div>

      <div class="container text-center">
        <h1 class="about-title">About Rooftop Hub</h1>
        <p class="about-tagline">
          A modern workspace designed for collaboration, creativity and growth.
        </p>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="about-intro">
          <p>
            Rooftop Hub is more than just a workspace. It is a dynamic community
            where entrepreneurs, startups, creatives and professionals come
            together to work, collaborate and grow. Located in the heart of
            Nairobi, we provide inspiring spaces designed to support
            productivity and innovation.
          </p>
        </div>
      </div>
    </section>

    <section class="about-section about-features">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="about-card">
              <i class="bi bi-people"></i>
              <h3>Community</h3>
              <p>
                Join a vibrant network of professionals, startups and
                innovators working together and sharing ideas.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="about-card">
              <i class="bi bi-lightning"></i>
              <h3>Productivity</h3>
              <p>
                Work in a focused environment with high-speed internet,
                modern facilities and comfortable workspaces.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="about-card">
              <i class="bi bi-diagram-3"></i>
              <h3>Collaboration</h3>
              <p>
                Connect with like-minded professionals and build partnerships
                that move your ideas forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section about-mission">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <img :src="missionImage" class="about-img" alt="Coworking space">
          </div>

          <div class="col-lg-6">
            <h2>Our Mission</h2>
            <p>
              Our mission is to create an environment where ideas flourish,
              businesses grow and people connect. We believe that the right
              workspace can inspire creativity and unlock new opportunities
              for individuals and teams alike.
            </p>

            <p>
              Whether you need a desk for the day, a meeting space for your
              team or a vibrant community to grow your network, Rooftop Hub
              provides the space and support to make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import '../assets/css/about.css'
import heroImage from '../assets/images/1.avif'
import missionImage from '../assets/images/5.jpg'
</script>