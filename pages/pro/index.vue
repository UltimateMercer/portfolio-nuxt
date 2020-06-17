<template>
  <div class="m-0">
    <div class="container-fluid bg-dark">
      <div class="container text-light px-lg-0">
        <h2 class="pt-3 mb-3">Projetos profissionais e acadêmicos</h2>
        <p class="text-size">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eveniet eligendi earum? Ipsa illum voluptatum magnam cupiditate nam
          ipsum dolores, voluptas quam voluptates aspernatur nemo quae. Pariatur
          eaque iusto aliquid?
        </p>
      </div>
      <div class="container p-0 py-3">
        <MasonryCards :cards="posts" />
      </div>
    </div>
  </div>
</template>
<script>
import MasonryCards from '~/components/MasonryCards.vue'

export default {
  name: 'Pro',

  components: {
    MasonryCards
  },

  // async asyncData() {
  //   const resolve = await require.context('~/content/pro/', true, /\.md$/)
  //   const imports = resolve.keys().map((key) => {
  //     const [, name] = key.match(/\/(.+)\.md$/)
  //     return resolve(key)
  //   })
  //   return {
  //     posts: imports
  //   }
  // },
  async asyncData() {
    const context = await require.context('~/content/pro/', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      ...context(key),
      _path: `/pro/${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  },

  data() {
    return {
      prefix: 'pro',
      posts: ''
    }
  }
  // methods: {
  //   getPermalink(pro) {
  //     return `${this.prefix}/${
  //       pro.meta.resourcePath
  //         .split('\\')
  //         .pop()
  //         .split('/')
  //         .pop()
  //         .split('.')[0]
  //     }`
  //   }
  // }
}
</script>
