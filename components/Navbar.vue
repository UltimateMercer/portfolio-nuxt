<template>
  <b-navbar tag="nav" toggleable="md" type="light" variant="light" fixed="top">
    <div class="container">
      <b-navbar-brand>
        <nuxt-link to="/" class="navbar-brand mx-2">
          <img
            src="~/static/logo-dark.png"
            width="70"
            class="img-fluid brand"
            alt="Ultimate Mercer Logo"
          />
        </nuxt-link>
      </b-navbar-brand>
      <b-nav-text class="text-dark"></b-nav-text>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/projects">
            Projetos
          </b-nav-item>
          <b-nav-item href="/about">
            Sobre mim
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
import Vue from 'vue'
import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)

export default {
  name: 'Navbar',
  data() {
    return {
      route: this.$nuxt.$route.path
    }
  },

  computed: {}
}
</script>
<style lang="scss">
.navbar {
  font-family: 'IBM Plex Sans Condensed', 'Fira Code', sans-serif;
  font-size: 1.25rem;
  padding: 0.25rem !important;
  .navbar-nav {
    .nav-item {
      padding: 0.25rem 1rem;
      font-weight: 500;
      .nav-link {
        color: #121212;
      }
    }
  }
}
</style>
