<template>
  <div class="container px-lg-0 ">
    <div class="grid row py-2">
      <div class="grid-sizer col-lg-4 col-md-6 col-12"></div>

      <div
        v-for="(card, i) in cards"
        :key="i"
        class="col-lg-4 col-md-6 col-12 grid-item"
      >
        <div class="card card-flat card-masonry">
          <div
            v-lazy-container="{ selector: 'img' }"
            class="card-masonry-area-image with-hover-overlay"
          >
            <img
              class="img-fluid card-masonry-image"
              :data-src="card.attributes.cover"
              alt="Card image cap"
            />
          </div>
          <div
            class="card-masonry-area-header h-100 d-flex flex-column justify-content-end"
          >
            <h5 class="mb-2">
              <span class="marker marker-dark">
                {{ card.attributes.title }}
              </span>
            </h5>
            <p class="mb-2">{{ card.attributes.timestamp }}</p>
            <nuxt-link :to="card._path" class="text-warning" target="_blank"
              ><span class="btn btn-block btn-sm btn-light btn-link">
                <strong
                  >Acessar <i class="fas fa-external-link-alt"></i
                ></strong> </span
            ></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MasonryCards',

  props: {
    // eslint-disable-next-line vue/require-default-prop
    cards: [Array]
  },

  data() {
    return {}
  },

  watch: {
    data() {
      this.masonryLoad()
    }
  },

  mounted() {
    this.masonryLoad()

    // const Masonry = require('masonry-layout')
    // // const grid = document.querySelector('.grid')
    // const masonry = new Masonry('.grid', {
    //   // options...
    //   columnWidth: '200px',
    //   itemSelector: '.grid-item'
    // })

    // return masonry
  },

  methods: {
    masonryLoad() {
      const Masonry = require('masonry-layout')
      // const masonry = new Masonry(this.selector, this.options)
      const grid = document.querySelector('.grid')
      const msnry = new Masonry(grid, {
        // options...
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'
        // percentPosition: true
      })

      this.$emit('masonry-loaded', msnry)
    }
  }
}
</script>
