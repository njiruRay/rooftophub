<template>
  <section class="rooftop-page">

    <section class="rooftop-section rooftop-slider">
      <div class="container">
        <div class="rooftop-carousel-wrap">
          <div
            id="rooftopCarousel"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4500"
          >
            <div class="carousel-indicators">
              <button
                v-for="(image, index) in heroImages"
                :key="`indicator-${index}`"
                type="button"
                data-bs-target="#rooftopCarousel"
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
                  class="rooftop-carousel-img"
                  :alt="`Rooftop image ${index + 1}`"
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#rooftopCarousel"
              data-bs-slide="prev"
              aria-label="Previous image"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#rooftopCarousel"
              data-bs-slide="next"
              aria-label="Next image"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="rooftop-section">
      <div class="container">
        <div class="rooftop-intro">
          <p>
            Our rooftop space offers a fresh and inspiring atmosphere for creators, teams and event organisers
            looking for a unique venue. Whether you are hosting a creative session, private event, networking
            experience or social gathering, the rooftop provides a flexible environment with an elevated city feel.
          </p>
        </div>
      </div>
    </section>

    <section class="rooftop-section rooftop-highlights">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="rooftop-card">
              <i class="bi bi-stars"></i>
              <h3>Creative Atmosphere</h3>
              <p>
                A visually appealing rooftop setting that works well for creators, social experiences and stylish gatherings.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="rooftop-card">
              <i class="bi bi-people-fill"></i>
              <h3>Flexible Capacity</h3>
              <p>
                Suitable for both smaller setups and larger event arrangements, with pricing designed around the scale of use.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="rooftop-card">
              <i class="bi bi-cup-hot-fill"></i>
              <h3>Optional Extras</h3>
              <p>
                Enhance your experience with add-ons such as a fully equipped kitchen or a dedicated bar space setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rooftop-section rooftop-rates">
      <div class="container">
        <div class="rooftop-rates-heading text-center">
          <span class="rooftop-label">Rates</span>
          <h2>Creatives & Event Space Pricing</h2>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-8">
            <div class="rooftop-rate-card">
              <h3>Best for Creatives & Event Organisers</h3>
              <ul>
                <li><strong>Per Hour:</strong> Kes 500</li>
                <li><strong>Per Hour:</strong> Kes 3,500 [5-100 Max]</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rooftop-extras text-center">
          <span class="rooftop-label">Extras</span>
        </div>

        <div class="row g-4 justify-content-center mt-1">
          <div class="col-lg-8">
            <div class="rooftop-extra-card">
              <ul>
                <li><strong>Fully Equipped Kitchen:</strong> Kes 5,000</li>
                <li><strong>Bar Space [Counter, Freezer & Fridge]:</strong> Kes 3,500</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rooftop-book-wrap">
          <a
            class="rooftop-book-btn"
            href="https://wa.link/2irzlx"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK THE ROOFTOP
          </a>
        </div>
      </div>
    </section>

  </section>
</template>

<script setup>
import '../../assets/css/rooftop-space.css'

import img1 from '../../assets/images/1.avif'
import img2 from '../../assets/images/4.avif'
import img3 from '../../assets/images/16.jpg'
import img4 from '../../assets/images/1.avif'
import img5 from '../../assets/images/4.avif'

const heroImages = [img1, img2, img3, img4, img5]
</script>