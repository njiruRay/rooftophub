<template>
  <section class="about-page">
    <section class="about-hero">
      <div
        class="about-hero-bg"
        :style="{ backgroundImage: `url(${heroImage})` }"
      ></div>
      <div class="about-hero-overlay"></div>

      <div class="container text-center">
        <h1 class="about-title">About Rooftop Creatives Hub</h1>
        <p class="about-tagline">
          A modern workspace designed for collaboration, creativity and growth.
        </p>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="about-intro">
          <p>
            Rooftop Creatives Hub is a creative and professional space designed to bring people, ideas and 
            opportunities together. We provide flexible workspaces, a rooftop work environment and a
             fully equipped podcast studio that supports creators, entrepreneurs, and teams looking for a 
             space to grow and collaborate. Our rooftop also serves as a unique venue for events, conversations 
             and community experiences. At Rooftop Creatives Hub, we are building more than a place to work, we are building 
             a space where productivity, creativity and meaningful connections thrive.

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
            
            <p>
              Step into a place where ideas take shape, creativity finds its voice 
              and people come together to build something meaningful. Here, every space is designed 
              to support how you work, create and connect. Whether you're collaborating, recording, hosting
               or simply getting things done, we offer an environment that encourages growth, fresh thinking
                and new opportunities. Welcome to a space where work meets possibility.

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