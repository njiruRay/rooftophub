<template>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm" id="top-navbar">
      <div class="container">
        <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/">
          <img :src="logoImage" alt="Rooftop Logo" class="site-logo" />
        </RouterLink>

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center fw-semibold">
            <li class="nav-item">
              <RouterLink class="nav-link nav-clean" to="/">Home</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link nav-clean" to="/about">About Us</RouterLink>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link nav-clean dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Facilities
              </a>

              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <RouterLink class="dropdown-item" to="/facilities/coworking-spaces">
                    Coworking Spaces
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/facilities/corporate-communal-spaces">
                    Corporate Communal Spaces
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/facilities/meeting-space">
                    Meeting Space
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/facilities/podcasting-studio">
                    Podcasting Studio
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/facilities/rooftop">
                    Rooftop
                  </RouterLink>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link nav-clean" to="/cafe">Cafe</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link nav-clean" to="/news-events">News & Events</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link nav-clean" to="/contact">Contact</RouterLink>
            </li>

            <li class="nav-item ms-lg-2">
              <a class="nav-link nav-clean nav-icon" href="#" aria-label="Search">
                <i class="bi bi-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import logoImage from '../assets/images/logo.png'
</script>