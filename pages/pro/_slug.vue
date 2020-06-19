<template>
  <div class="pb-4">
    <!--div class="container">
      <h1 class="text-pink">
        Create a frontmatter Markdown powered Blog with Nuxt.JS
      </h1>
      <hr class="bg-warning" />
    </!--div-->
    <div class="container-fluid p-0">
      <div class="col-lg-10 offset-lg-1 col-12 p-lg-0">
        <div class="header-simple">
          <div v-lazy-container="{ selector: 'img' }" class="view">
            <img
              :data-src="post.attributes.cover"
              alt="Post"
              class="header-simple-image-top duotone-cyberpunk-x"
            />
            <div class="mask texture-mask-6"></div>
          </div>
          <div class="container p-0">
            <div class="header-simple-info">
              <h1 class="blog-title">
                <span class="marker marker-dark title">
                  {{ post.attributes.title }}
                </span>
              </h1>
              <h5 class="blog-meta">
                <span class="marker marker-dark">
                  {{ post.attributes.timestamp }}
                </span>
              </h5>
              <div class="d-flex">
                <div class="mb-3">
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
    </div>
    <div class="container-fluid p-lg-0 p-md-0">
      <div
        class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12 mb-4"
      >
        <div class="page ">
          <div class="post serif">
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
  // async asyncData({ params }) {
  //   try {
  //     console.info(params.slug)
  //     const post = await import(`~/content/pro/${params.slug}.md`)
  //     console.log(post)
  //     debugger
  //     return {
  //       title: post.attributes.title,
  //       singlePostComponent: post.vue.component
  //     }
  //   } catch (err) {
  //     console.debug(err)
  //     return false
  //   }
  // }

  async asyncData({ params }) {
    try {
      const post = await import(`~/content/pro/${params.slug}.md`)
      return {
        post
      }
    } catch (error) {
      return false
    }
  }
}
</script>
