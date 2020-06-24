<template>
  <section class="bg-dark">
    <div class="container-fluid mt-5 pb-4">
      <div class="container text-light pt-3 px-lg-0">
        <h2 class="pt-5 mb-3">
          <strong>
            Projetos profissionais e acadêmicos
          </strong>
        </h2>
        <p class="text-size">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eveniet eligendi earum? Ipsa illum voluptatum magnam cupiditate nam
          ipsum dolores, voluptas quam voluptates aspernatur nemo quae. Pariatur
          eaque iusto aliquid?
        </p>
      </div>
      <div class="col-lg-10 col-md-12 col-12 offset-lg-1 offset-md-0 pb-5">
        <MasonryCards :posts="posts" :route="route" />
      </div>
    </div>
  </section>
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
    return { posts }
  },

  data() {
    return {
      prefix: 'pro',
      posts: '',
      route: '/pro'
    }
  }
}
</script>
<style lang="scss">
.text-size {
  font-size: 1.125rem;
}
</style>
