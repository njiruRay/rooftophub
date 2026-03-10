<template>
  <!-- HERO -->
  <section class="hero">
    <div
      class="hero-slide"
      :style="{ backgroundImage: `url(${heroImage})` }"
    ></div>
    <div class="hero-overlay"></div>
  </section>

  <!-- WELCOME -->
  <section class="welcome py-5">
    <div class="container text-center welcome-inner">
      <h2 class="section-heading">WELCOME TO THE ROOFTOP</h2>
      <p class="welcome-text mx-auto">
        Working at home is great but unifying your teams’ efforts increases productivity and makes you achieve more.
        Also, connecting with others outside your team widens your network and perspective. As a member of Rooftop,
        you get more than an office space — you benefit from value-added services that give your business the edge
        to stay ahead.
      </p>
    </div>
  </section>

  <!-- FACILITIES -->
  <section class="facilities py-5" id="facilities">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="section-heading">FACILITIES AVAILABLE</h2>
      </div>

      <div class="row g-4">
        <div
          v-for="(facility, index) in facilities"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <RouterLink class="facility-tile" :to="facility.link">
            <div
              class="tile-bg"
              :style="{ backgroundImage: `url(${facility.image})` }"
            ></div>
            <div class="tile-overlay"></div>
            <div class="tile-text">{{ facility.label }}</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY THE ROOFTOP -->
  <section class="why" id="why-section">
    <div
      class="why-image"
      :style="{ backgroundImage: `url(${whyImage})` }"
    ></div>

    <div class="container">
      <div class="why-content text-center">
        <h2 class="why-title">WHY THE ROOFTOP</h2>
        <ul class="why-list mb-0">
          <li v-for="(point, index) in whyPoints" :key="index">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- FIND US -->
  <section class="findus py-5" id="find-us">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="section-heading">FIND US</h2>
      </div>

      <div class="map-wrap">
        <iframe
          title="Rooftop Location Map"
          src="https://www.google.com/maps?q=AAYMCA%20Building,%20State%20House%20Crescent,%20State%20House%20Avenue,%20Nairobi,%20Kenya&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import heroImage from '../assets/images/1.avif'
import whyImage from '../assets/images/3.avif'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
import img9 from '../assets/images/9.jpg'

const facilities = [
  { label: 'COWORKING SPACES', image: img5, link: '/facilities/coworking-spaces' },
  { label: 'CORPORATE COMMUNAL SPACES', image: img8, link: '/facilities/corporate-communal-spaces' },
  { label: 'MEETING SPACE', image: img7, link: '/facilities/meeting-space' },
  { label: 'PODCASTING STUDIO', image: img6, link: '/facilities/podcasting-studio' },
  { label: 'ROOFTOP', image: heroImage, link: '/facilities/rooftop' },
  { label: 'CAFE', image: img9, link: '/cafe' }
]

const whyPoints = [
  'Flexible membership plans to suit your schedule and budget.',
  'Ample Parking plus Security',
  'Conducive environment for creativity',
  'Modern and stylish workspaces designed for comfort and productivity.',
  'High-speed internet and top-notch amenities at your fingertips.',
  'Access to exclusive networking events and workshops.',
  'A supportive community that encourages growth and success.'
]
</script>