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
                {{ post.attributes.timestamp }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mb-3">
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
              <span class="marker marker-dark title">
                {{ post.attributes.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ post.attributes.timestamp }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mb-3">
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

    <div
      v-if="post.html || post.attributes.description"
      class="container-fluid p-lg-0 p-md-0 my"
    >
      <div
        class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12 mt-5 mb-4"
      >
        <div class="page">
          <div class="post base">
            <div v-if="post.attributes.description" class="mb-4">
              <p class="mb-0">{{ post.attributes.description }}</p>
              <hr class="m bg-dark" />
            </div>

            <!-- eslint-disable-next-line -->
            <div v-html="post.html" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Headers from '~/components/HeadersPostPersonal'

export default {
  components: {
    // Headers
  },

  async asyncData({ params }) {
    try {
      const post = await import(`~/content/personal/${params.slug}.md`)
      return {
        post
      }
    } catch (error) {
      return false
    }
  },
  data() {
    return {}
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
        return require(`~/assets/images/personal/${image}`)
      }

      // Abaixo funfa
      // return require(`~/assets/images${this.routes}/${post.attributes.attributes.cover}`)
    }
  }
}
</script>
