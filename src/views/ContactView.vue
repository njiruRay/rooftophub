<template>
  <section class="contact-page py-5">
    <div class="container contact-container">
      <div class="text-center mb-5">
        <h1 class="contact-title">Contact Us</h1>
        <p class="contact-subtitle">
          Have a question, want to book a space, or explore a partnership?
          Send us a message and our team will respond shortly.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <h3>Get in Touch</h3>

          <div class="contact-item">
            <strong>Email</strong>
            <p>aaymcas@africaymca.org</p>
          </div>

          <div class="contact-item">
            <strong>WhatsApp</strong>
            <p>
              Reach us directly for bookings, workspace inquiries, partnerships,
              and general questions.
            </p>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="sendWhatsApp">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <button type="submit" class="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import '../assets/css/contact.css'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const sendWhatsApp = () => {
  const text = `Hello, I would like to make an inquiry.

Full Name: ${form.name}
Email Address: ${form.email}
Subject: ${form.subject}

Message:
${form.message}`

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
  window.open(whatsappUrl, '_blank')
}
</script>