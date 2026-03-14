<template>
  <section class="cw-page" id="cwPage">

    <!-- HERO -->
    <section class="cw-hero" aria-label="Corporate communal hero banner">
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
                  :alt="`Corporate communal image ${index + 1}`"
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

import img5 from '../../assets/images/13.avif'
import img6 from '../../assets/images/4.avif'
import img7 from '../../assets/images/13.avif'
import img8 from '../../assets/images/4.avif'
import img9 from '../../assets/images/13.avif'
import img10 from '../../assets/images/4.avif'

const hero = {
  title: 'Corporate Communal Spaces',
  image: img5
}

const intro = {
  text: 'Experience a collaborative way of working in our professional communal workspace designed for small teams and groups. Whether you are holding strategy sessions, working on projects, or meeting clients, our shared environment provides a productive setting that encourages teamwork, creativity and meaningful collaboration.'
}

const membership = {
  title: 'Membership Options',
  items: [
    {
      label: 'Hourly Pass',
      text: 'Ideal for small teams or groups that need a professional space for quick meetings, collaborative sessions, or short work periods.'
    },
    {
      label: 'Full Day Pass',
      text: 'Perfect for teams that want a productive environment for a full day of focused work, brainstorming, or planning sessions.'
    },
    {
      label: 'Weekly Pass',
      text: 'A great option for teams that require consistent access to a collaborative workspace throughout the week.'
    },
    {
      label: 'Monthly Pass',
      text: 'Best suited for teams that want regular access to a communal workspace to support ongoing projects, teamwork and client meetings.'
    }
  ]
}

const slider = {
  images: [img6, img7, img8, img9, img10]
}

const rates = {
  heading: 'Rates',
  items: [
    { label: 'Per Hour', value: 'Kes 600' },
    { label: 'Full-Day Pass', value: 'Kes 2,000' },
    { label: 'Weekly Pass', value: 'Kes 10,000' },
    { label: 'Monthly Pass', value: 'Kes 30,000' }
  ]
}
</script>