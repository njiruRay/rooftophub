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

    <!-- WHY -->
    <section class="cw-section">
      <div class="container">
        <h2 class="cw-h2">{{ why.title }}</h2>
        <ul class="cw-list">
          <li v-for="(item, index) in why.items" :key="index">
            <b>{{ item.label }}:</b> {{ item.text }}
          </li>
        </ul>
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
            >
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#cwCarousel"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
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
import img5 from '../../assets/images/5.jpg'

const hero = {
  title: 'Corporate Communal Spaces',
  image: img5
}

const intro = {
  text: 'Discover a new way of working in our vibrant and innovative coworking space. Whether you’re a freelancer, a startup, or a remote team, our shared workspace offers an environment designed to inspire productivity and foster connections.'
}

const why = {
  title: 'Why Choose Our Coworking Space?',
  items: [
    {
      label: 'Flexibility',
      text: 'Embrace the freedom to work on your own terms. Choose from hot desks, dedicated desks, or private offices that cater to your unique working style.'
    },
    {
      label: 'Community',
      text: 'Join a diverse community of like-minded individuals and businesses. Collaborate, network, and exchange ideas in an environment that encourages interaction and support.'
    },
    {
      label: 'Amenities',
      text: 'Enjoy top-notch amenities designed to enhance your work experience. High-speed internet, modern meeting rooms, printing facilities, and a fully equipped kitchen are just a few of the perks available to our members.'
    }
  ]
}

const membership = {
  title: 'Membership Options',
  items: [
    {
      label: 'Day Passes',
      text: 'Perfect for occasional use, providing access to the space for a single day.'
    },
    {
      label: 'Part-Time Memberships',
      text: 'Access the workspace for a set number of days per week or month.'
    },
    {
      label: 'Full-Time Memberships',
      text: 'Enjoy unlimited access to the space and all its amenities'
    }
  ]
}

const slider = {
  images: [img5, img5, img5, img5, img5, img5]
}

const rates = {
  heading: 'Rates',
  items: [
    { label: 'Per Hour', value: 'Kes 300' },
    { label: 'Half-Day Pass', value: 'Kes 1,500' },
    { label: 'Full-Day Pass', value: 'Kes 2,000' },
    { label: 'Weekly Pass', value: 'Kes 8,000' },
    { label: 'Monthly Pass', value: 'Kes 24,000' }
  ]
}
</script>