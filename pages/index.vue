<template>
  <div>
    <PersonalHeader />

    <KnowledgeAreas />
    <div class="bg-dark">
      <Projects />
      <LastProjects />
    </div>
  </div>
</template>

<script>
//  import Logo from '~/components/Logo.vue'
import PersonalHeader from '~/components/PersonalHeader.vue'
import KnowledgeAreas from '~/components/KnowledgeAreas.vue'
import Projects from '~/components/Projects.vue'
import LastProjects from '~/components/LastProjects.vue'

export default {
  components: {
    PersonalHeader,
    KnowledgeAreas,
    Projects,
    LastProjects
  }
}
</script>

<style></style>
