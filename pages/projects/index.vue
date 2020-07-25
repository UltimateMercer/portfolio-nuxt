<template>
  <div>
    <div style="height:80px"></div>
    <section>
      <div class="container-fluid">
        <div class="container px-lg-0 mb-4">
          <h2 class="pt-4 mb-3">
            <strong>
              Projetos profissionais e acadêmicos
            </strong>
          </h2>
          <p class="text-size">
            Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para
            o âmbito acadêmico e profissional, quanto para o pessoal com o
            objetivo de me manter sempre em evolução das minhas técnicas e
            habilidades, e praticando o uso da criatividade para o
            desenvolvimento dos meus projeto em geral.
          </p>
        </div>
      </div>
      <div class="container-fluid bg-dark">
        <div class="col-lg-10 col-md-12 col-12 offset-lg-1 offset-md-0 py-5 ">
          <MasonryCards :posts="posts" :route="route" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import MasonryCards from '~/components/MasonryCards.vue'

export default {
  name: 'Projects',

  components: {
    MasonryCards
  },

  async asyncData() {
    const context = await require.context('~/content/projects/', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      ...context(key),
      path: `/projects/${key.replace('.md', '').replace('./', '')}`
    }))

    return { posts }
  },

  data() {
    return {
      prefix: 'projects',
      posts: '',
      route: '/projects'
    }
  }

  // computed(){
  //   postContext({posts}){
  //     return
  //   }
  // }
}
</script>
<style lang="scss">
.text-size {
  font-size: 1.125rem;
}
</style>
