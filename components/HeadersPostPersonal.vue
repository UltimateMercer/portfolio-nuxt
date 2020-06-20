<template>
  <div class="mb-3">
    <div v-if="orientation === 'portrait'">
      <div class="header-content header-h-full d-md-inline-flex mb-5">
        <div class="header-info-half header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ post.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ post.timestamp }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mb-3">
                <span
                  v-for="(tag, i) in post.tags"
                  :key="i"
                  class="badge badge-dark"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="header-image-half header-h-full view">
          <div
            v-lazy:background-image="imageSrc"
            class="header-image-background header-h-full"
          ></div>
          <div class="mask texture-mask-4"></div>
        </div>
      </div>
    </div>
    <div v-if="orientation === 'landscape'">
      <div class="header-content header-h-full d-md-inline-flex mb-5">
        <div class="header-info header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ post.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ post.timestamp }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mb-3">
                <span
                  v-for="(tag, i) in post.tags"
                  :key="i"
                  class="badge badge-dark"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="header-image header-h-full view">
          <div
            v-lazy:background-image="imageSrc"
            class="header-image-background header-h-full"
          ></div>
          <div class="mask texture-mask-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeadersPostPersonal',

  props: {
    post: Object
  },

  data() {
    return {
      orientation: this.post.imgorientation
    }
  },

  computed: {
    imageSrc() {
      const image = this.post.cover
      // console.log(teste)

      if (image.startsWith('http') || image.startsWith('https')) {
        // console.log(true)
        return this.post.cover
      } else {
        // console.log(false)
        return require(`~/assets/images/personal/${image}`)
      }

      // Abaixo funfa
      // return require(`~/assets/images${this.routes}/${post.cover}`)
    }
  }
}
</script>
