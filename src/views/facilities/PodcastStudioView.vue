<template>
  <section class="podcast-page">
    <section class="podcast-section podcast-slider">
      <div class="container">
        <div class="podcast-carousel-wrap">
          <div
            id="podcastCarousel"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4500"
          >
            <div class="carousel-indicators">
              <button
                v-for="(image, index) in heroImages"
                :key="`indicator-${index}`"
                type="button"
                data-bs-target="#podcastCarousel"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : null"
                :aria-label="`Slide ${index + 1}`"
              ></button>
            </div>

            <div class="carousel-inner">
              <div
                v-for="(image, index) in heroImages"
                :key="`slide-${index}`"
                class="carousel-item"
                :class="{ active: index === 0 }"
              >
                <img
                  :src="image"
                  class="podcast-carousel-img"
                  :alt="`Podcast studio image ${index + 1}`"
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#podcastCarousel"
              data-bs-slide="prev"
              aria-label="Previous image"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#podcastCarousel"
              data-bs-slide="next"
              aria-label="Next image"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="podcast-section">
      <div class="container">
        <div class="podcast-intro">
          <p>
            Our podcast studio is designed for creators, storytellers, brands and teams
            looking for a professional yet inspiring environment to record meaningful conversations.
            Whether you need audio-only production or full audio and video recording, the space offers
            a polished setting that supports clarity, comfort and creativity.
          </p>
        </div>
      </div>
    </section>

    <section class="podcast-section podcast-highlights">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="podcast-card">
              <i class="bi bi-mic-fill"></i>
              <h3>Professional Setup</h3>
              <p>
                Record in a dedicated studio environment built for clean sound and a smooth session flow.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="podcast-card">
              <i class="bi bi-camera-video-fill"></i>
              <h3>Audio & Video</h3>
              <p>
                Choose between audio recording or a full audio and video setup for richer content production.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="podcast-card">
              <i class="bi bi-clock-fill"></i>
              <h3>Fast Delivery</h3>
              <p>
                Raw files are delivered within 48 hours, helping you move quickly from recording to publishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="podcast-section podcast-rates">
      <div class="container">
        <div class="podcast-rates-heading text-center">
          <span class="podcast-label">Rates</span>
          <h2>Podcast Studio Pricing</h2>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-5 col-md-6">
            <div class="podcast-rate-card">
              <h3>YMCA Youths Subsidised Rates</h3>
              <ul>
                <li><strong>Audio Recording:</strong> Kes 1,000</li>
                <li><strong>Audio &amp; Video Recording:</strong> Kes 2,000</li>
              </ul>
              <div class="podcast-rate-footer">Per Hour</div>
            </div>
          </div>

          <div class="col-lg-5 col-md-6">
            <div class="podcast-rate-card">
              <h3>Normal Rates</h3>
              <ul>
                <li><strong>Audio Recording:</strong> Kes 1,500</li>
                <li><strong>Audio &amp; Video Recording:</strong> Kes 2,500</li>
              </ul>
              <div class="podcast-rate-footer">Per Hour</div>
            </div>
          </div>
        </div>

        <div class="podcast-deliverables text-center">
          <span class="podcast-label">Deliverables</span>
          <p>Raw files delivered in 48 hours</p>
        </div>

        <div class="podcast-book-wrap">
          <a
            class="podcast-book-btn"
            href="https://wa.link/2irzlx"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK A SESSION
          </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import '../../assets/css/podcast-studio.css'

import img1 from '../../assets/images/6.jpg'
import img2 from '../../assets/images/2.avif'
import img3 from '../../assets/images/14.jpg'
import img4 from '../../assets/images/10.jpg'
import img5 from '../../assets/images/15.jpg'
import img6 from '../../assets/images/4.jpg'

const heroImages = [img1, img2, img3, img4, img5, img6]
</script>