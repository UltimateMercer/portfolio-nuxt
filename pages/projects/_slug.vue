<template>
  <div class="">
    <div
      v-if="
        post.attributes.imgorientation === 'portrait' ||
          post.attributes.imgorientation === ''
      "
    >
      <div class="header-content header-h-full d-md-inline-flex">
        <div class="header-info-half header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ post.attributes.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ post.attributes.description }}
              </span>
            </h5>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ post.attributes.timestamp }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-2">
                <span v-if="post.attributes.category === 'Design'">
                  <span class="badge badge-uv mx-0">
                    {{ post.attributes.category }}
                  </span>
                </span>
                <span v-if="post.attributes.category === 'Dev'">
                  <span class="badge badge-primary text-dark mx-0">
                    {{ post.attributes.category }}
                  </span>
                </span>
                <span
                  v-for="(tag, i) in post.attributes.tags"
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
    <div v-if="post.attributes.imgorientation === 'landscape'">
      <div class="header-content header-h-full d-md-inline-flex">
        <div class="header-info header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark">
                {{ post.attributes.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ post.attributes.timestamp }}
              </span>
            </h5>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ post.attributes.description }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-2">
                <span v-if="post.attributes.category === 'Design'">
                  <span class="badge badge-uv mx-0">
                    {{ post.attributes.category }}
                  </span>
                </span>
                <span v-if="post.attributes.category === 'Dev'">
                  <span class="badge badge-primary text-dark mx-0">
                    {{ post.attributes.category }}
                  </span>
                </span>
                <span
                  v-for="(tag, i) in post.attributes.tags"
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
    <div v-if="post.attributes.imgorientation === 'parallax'">
      <div class="header-simple mt-5 pt-4">
        <div
          v-lazy:background-image="imageSrc"
          class="header-simple-image-parallax view mb-4"
        >
          <div class="mask parallax-mask texture-mask-4"></div>
        </div>
        <div class="container p-lg-0">
          <div class="header-simple-info">
            <h1 class="blog-title">
              <span class="marker marker-dark marker-title">
                {{ post.attributes.title }}
              </span>
            </h1>
            <h5 v-if="post.attributes.description" class="blog-meta">
              <span class="marker marker-dark">
                {{ post.attributes.description }}
              </span>
            </h5>
            <h5 class="blog-meta">
              <span class="marker marker-dark">
                {{ post.attributes.timestamp }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span v-if="post.attributes.category === 'Design'">
                  <span class="badge badge-uv mx-0">
                    {{ post.attributes.category }}
                  </span>
                </span>
                <span v-if="post.attributes.category === 'Dev'">
                  <span class="badge badge-primary text-dark mx-0">
                    {{ post.attributes.category }}
                  </span>
                </span>
                <span
                  v-for="(tag, i) in post.attributes.tags"
                  :key="i"
                  class="badge badge-dark"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="post.html" class="container-fluid p-lg-0 p-md-0 my-2">
      <div
        class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12 mt-5 mb-4"
      >
        <div class="page">
          <div class="post" :class="fontStyle">
            <!-- eslint-disable-next-line -->
            <div v-html="post.html" />
          </div>
        </div>
      </div>
    </div>

    <DuotoneFilter />
  </div>
</template>
<script>
import DuotoneFilter from '~/components/DuotoneFilters.vue'

export default {
  components: {
    DuotoneFilter
  },

  async asyncData({ params }) {
    try {
      const post = await import(`~/content/projects/${params.slug}.md`)
      return {
        post
      }
    } catch (error) {
      return false
    }
  },

  computed: {
    imageSrc() {
      const image = this.post.attributes.cover
      // console.log(teste)

      if (image.startsWith('http') || image.startsWith('https')) {
        // console.log(true)
        return image
      } else {
        // console.log(false)
        return require(`~/assets/images/projects/${image}`)
      }

      //   // Abaixo funfa
      //   // return require(`~/assets/images${this.routes}/${post.attributes.attributes.cover}`)
    },
    fontStyle() {
      const font = this.post.attributes.fontStyle
      if (!font) {
        return 'base'
      } else {
        return font
      }
    }
  }
}
</script>
