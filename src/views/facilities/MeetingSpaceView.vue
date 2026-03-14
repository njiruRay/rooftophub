<template>
  <section class="cw-page" id="cwPage">
    <!-- HERO -->
    <section class="cw-hero" aria-label="Meeting space hero banner">
      <div
        class="cw-hero-bg"
        :style="{ backgroundImage: `url(${hero.image})` }"
      ></div>
      <div class="cw-hero-overlay"></div>
      <div class="container">
        <h1 class="cw-hero-title">{{ hero.title }}</h1>
      </div>
    </section>

    <!-- INTRO -->
    <section class="cw-section cw-intro">
      <div class="container">
        <p class="cw-intro-text">
          {{ intro.text }}
        </p>
      </div>
    </section>

    <!-- MEMBERSHIP -->
    <section class="cw-section">
      <div class="container">
        <h2 class="cw-h2">{{ membership.title }}</h2>
        <ul class="cw-list">
          <li v-for="(item, index) in membership.items" :key="index">
            <b>{{ item.label }}:</b> {{ item.text }}
          </li>
        </ul>
      </div>
    </section>

    <!-- SLIDER -->
    <section class="cw-section cw-slider">
      <div class="container">
        <div class="cw-carousel-wrap">
          <div
            id="cwCarousel"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4500"
          >
            <div class="carousel-indicators">
              <button
                v-for="(image, index) in slider.images"
                :key="index"
                type="button"
                data-bs-target="#cwCarousel"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : null"
                :aria-label="`Slide ${index + 1}`"
              ></button>
            </div>

            <div class="carousel-inner">
              <div
                v-for="(image, index) in slider.images"
                :key="index"
                class="carousel-item"
                :class="{ active: index === 0 }"
              >
                <img
                  :src="image"
                  class="cw-carousel-img"
                  :alt="`Meeting space image ${index + 1}`"
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#cwCarousel"
              data-bs-slide="prev"
              aria-label="Previous image"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#cwCarousel"
              data-bs-slide="next"
              aria-label="Next image"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- RATES -->
    <section class="cw-section cw-rates">
      <div class="container">
        <h2 class="cw-h2">{{ rates.heading }}</h2>

        <div class="cw-rate-card">
          <h3 class="cw-rate-title">Rates</h3>

          <ul class="cw-list cw-rate-list">
            <li v-for="(item, index) in rates.items" :key="index">
              <b>{{ item.label }}:</b> {{ item.value }}
            </li>
          </ul>
        </div>

        <div class="cw-book-wrap mt-4">
          <a
            class="cw-book-btn"
            href="https://wa.link/2irzlx"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK A SPACE
          </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import '../../assets/css/coworking-space.css'

import heroImg from '../../assets/images/14.avif'
import slide1 from '../../assets/images/4.avif'
import slide2 from '../../assets/images/7.jpg'
import slide3 from '../../assets/images/4.avif'
import slide4 from '../../assets/images/7.jpg'
import slide5 from '../../assets/images/4.avif'

const hero = {
  title: 'Meeting Space',
  image: heroImg
}

const intro = {
  text: 'Our meeting space offers a professional and welcoming setting for team discussions, client meetings, presentations, and planning sessions. Designed for comfort and focus, it provides the right environment for productive conversations and smooth collaboration.'
}

const membership = {
  title: 'Booking Options',
  items: [
    {
      label: 'Hourly Booking',
      text: 'Ideal for short meetings, check-ins, presentations, or quick team sessions.'
    },
    {
      label: 'Half-Day Booking',
      text: 'Perfect for workshops, planning sessions, interviews, or meetings that need more time and flexibility.'
    },
    {
      label: 'Full-Day Booking',
      text: 'Best for extended team sessions, training, strategy meetings, and full-day engagements.'
    }
  ]
}

const slider = {
  images: [slide1, slide2, slide3, slide4, slide5]
}

const rates = {
  heading: 'Rates',
  items: [
    { label: 'Per Hour', value: 'Kes 1,500' },
    { label: 'Half-Day Pass', value: 'Kes 5,500' },
    { label: 'Full-Day Pass', value: 'Kes 10,000' }
  ]
}
</script>