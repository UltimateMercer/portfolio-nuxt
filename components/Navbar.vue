<template>
  <div>
    <b-navbar
      tag="nav"
      toggleable="md"
      type="light"
      variant="light"
      fixed="top"
      class="py-md-1 text-dark"
    >
      <div class="container">
        <b-navbar-brand>
          <nuxt-link to="/" class="navbar-brand">
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
            <b-nav-item></b-nav-item>

            <b-nav-item-dropdown
              toggle-class="text-dark"
              text="Projetos"
              right
              class=" mr-md-3"
            >
              <b-dropdown-item href="#"
                >Profissionais e acadêmicos</b-dropdown-item
              >
              <b-dropdown-item href="#">Pessoais</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
              <nuxt-link to="/about" class="text-dark"> Sobre mim</nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
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
