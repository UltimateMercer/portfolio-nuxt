<template>
  <div>
    <PersonalHeader />

    <KnowledgeAreas />
    <Projects />
    <LastProjects />
    <Contact />
    <DuotoneFilter />

    <!--div class="container m-0">
      <logo />
      <h1 class="title">
        portfolio-nuxt
      </h1>
      <h2 class="subtitle">
        My spectacular Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </!--div-->
  </div>
</template>

<script>
//  import Logo from '~/components/Logo.vue'
import PersonalHeader from '~/components/PersonalHeader.vue'
// import About from '~/components/About.vue'
import KnowledgeAreas from '~/components/KnowledgeAreas.vue'
import Projects from '~/components/Projects.vue'
import LastProjects from '~/components/LastProjects.vue'
import Contact from '~/components/Contact.vue'
import DuotoneFilter from '~/components/DuotoneFilters.vue'

export default {
  components: {
    PersonalHeader,
    KnowledgeAreas,
    Projects,
    LastProjects,
    Contact,
    DuotoneFilter
  }
}
</script>

<style></style>
