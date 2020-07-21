<template>
  <div class="grid row py-2">
    <div class="grid-sizer col-lg-4 col-md-6 col-12"></div>

    <div
      v-for="(post, i) in posts"
      :key="i"
      class="col-lg-4 col-md-6 col-12 p-0 grid-item"
    >
      <div class="card card-flat card-masonry m-md-0">
        <div class="card-masonry-area-image with-hover-overlay">
          <div class="view">
            <img
              class="img-fluid card-masonry-image"
              :src="imagePath(post)"
              alt="Card image cap"
            />
            <div class="mask texture-mask-2"></div>
          </div>
        </div>
        <div
          class="card-masonry-area-header h-100 d-flex flex-column justify-content-end"
        >
          <h5 class="mb-2">
            <span class="marker marker-dark">
              {{ post.attributes.title }}
            </span>
          </h5>
          <p class="mb-2">
            <span class="marker marker-dark">
              {{ post.attributes.timestamp }}
            </span>
          </p>
          <div v-if="post.attributes.isPublished">
            <nuxt-link
              :to="post._path"
              class="text-warning my-2"
              target="_blank"
            >
              <span class="btn btn-block btn-sm btn-dark btn-link">
                <strong>
                  <font-awesome-icon :icon="['fas', 'external-link-alt']" />

                  Acessar
                </strong>
              </span>
            </nuxt-link>
          </div>
          <div v-else>
            <button class="btn btn-block btn-sm btn-dark" disabled>
              <strong>
                <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                Acessar
              </strong>
            </button>
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
    posts: {
      type: Array,
      default: null
    },

    route: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      routes: this.$props.route
    }
  },

  computed: {},

  watch: {
    data() {
      this.loadMasonry()
    }
  },

  mounted() {
    this.loadMasonry()
  },

  methods: {
    loadMasonry() {
      const Masonry = require('masonry-layout')
      const ImagesLoaded = require('imagesloaded')

      const grid = document.querySelector('.grid')

      ImagesLoaded(grid, () => {
        this.$emit('images-loaded')
        const msnry = new Masonry(grid, {
          // options...
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true
        })

        this.$emit('masonry-loaded', msnry)
      })
    },

    imagePath(post) {
      const image = post.attributes.cover
      // console.log(teste)

      if (image.startsWith('http') || image.startsWith('https')) {
        // console.log(true)
        return post.attributes.cover
      } else {
        // console.log(false)
        return require(`~/assets/images${this.routes}/${image}`)
      }

      // Abaixo funfa
      // return require(`~/assets/images${this.routes}/${post.attributes.cover}`)
    }
  }
}
</script>
