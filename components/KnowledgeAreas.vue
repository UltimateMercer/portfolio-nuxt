<template>
  <section>
    <section class="container-fluid bg-light">
      <div class="container p-lg-0 pt-1 pb-2">
        <div class="px-lg-4 px-1">
          <h2 class="my-3"><strong>Conhecimento</strong></h2>
          <div class="text-size mb-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              consequuntur eligendi sint, hic recusandae possimus reprehenderit
              rem delectus, adipisci illum aspernatur quam quasi facilis
              voluptatum iusto quisquam, sequi expedita maiores.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid bg-primary">
      <div class="container py-3">
        <div class="card card-plain">
          <div class="card-body">
            <h2 class="text-dark mb-3">
              <strong>Desenvolvimento Front-End/Web</strong>
            </h2>
            <h4 class="text-dark">Tecnologias conhecidas:</h4>
            <h5 class="mb-3">
              <span class="badge badge-primary border-badge-dark text-dark"
                >HTML</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >CSS</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >SASS/SCSS</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >PHP</span
              >
            </h5>
            <h4 class="text-dark">Quero aprimorar:</h4>
            <h5 class="mb-3">
              <span class="badge badge-primary border-badge-dark text-dark"
                >Vue</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >NuxtJS</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >Javascript</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >AdonisJS</span
              >
            </h5>
            <h4 class="text-dark">Ferramentas de desenvolvimento:</h4>
            <h5 class="mb-3">
              <span class="badge badge-primary border-badge-dark text-dark"
                >VSCode</span
              >

              <span class="badge badge-primary border-badge-dark text-dark"
                >Bootstrap</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >GitHub</span
              >

              <span class="badge badge-primary border-badge-dark text-dark"
                >NodeJS</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >NPM</span
              >
            </h5>
            <h4 class="text-dark">Quero aprender/aprimorar:</h4>
            <h5 class="mb-3">
              <span class="badge badge-primary border-badge-dark text-dark"
                >React</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >NextJS</span
              >
              <span class="badge badge-primary border-badge-dark text-dark"
                >Gatsby</span
              >
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-uv">
      <div class="container py-3">
        <div class="card card-plain text-md-right">
          <div class="card-body">
            <h2 class="text-light mb-3"><strong>Design</strong></h2>
            <h4 class="text-light">O que eu gosto de desenvolver:</h4>
            <h5 class="mb-3">
              <span class="badge badge-uv border-badge-light">Websites</span>
              <span class="badge badge-uv border-badge-light">Posters</span>
              <span class="badge badge-uv border-badge-light">Wallpapers</span>
              <span class="badge badge-uv border-badge-light">Capas</span>
            </h5>
            <h4 class="text-light">Quero aprimorar:</h4>
            <h5 class="mb-3">
              <span class="badge badge-uv border-badge-light"
                >Adobe After Effects</span
              >
              <span class="badge badge-uv border-badge-light"
                >Adobe Illustrator</span
              >
              <span class="badge badge-uv border-badge-light"
                >Adobe InDesign</span
              >
            </h5>
            <h4 class="text-light">Ferramentas de design:</h4>
            <h5 class="mb-3">
              <span class="badge badge-uv border-badge-light"
                >Adobe Photoshop</span
              >
              <span class="badge badge-uv border-badge-light"
                >Adobe Illustrator</span
              >
              <span class="badge badge-uv border-badge-light">Figma</span>
              <span class="badge badge-uv border-badge-light">Adobe XD</span>
              <span class="badge badge-uv border-badge-light">Invision</span>
            </h5>
            <h4 class="text-light">Quero aprender:</h4>
            <h5 class="mb-3">
              <span class="badge badge-uv border-badge-light">Sketch</span>
              <span class="badge badge-uv border-badge-light">Framer Web</span>
              <span class="badge badge-uv border-badge-light">Webflow</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'KnowledgeAreas'
}
</script>
<style lang="scss">
.border-badge-light {
  border: 2px solid #eaeaea;
}

.border-badge-dark {
  border: 2px solid #121212;
}
</style>
