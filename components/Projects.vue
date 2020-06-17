<template>
  <div>
    <div class="container-fluid bg-dark">
      <div class="container p-lg-0">
        <div class="pt-4 pb-1 px-lg-4 px-1">
          <h2 class="text-light mb-3"><strong>Projetos</strong></h2>
          <p class="text-size text-light">
            Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para
            o âmbito acadêmico e profissional, quanto para o pessoal com o
            objetivo de me manter sempre em evolução das minhas técnicas e
            habilidades, e praticando o uso da criatividade para o
            desenvolvimento dos meus projeto em geral.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-dark p-0">
      <div v-lazy-container="{ selector: 'img' }" class="row m-0 p-0">
        <div
          class="col-lg-6 col-md-6 col-12 p-0 pl-lg-0 pr-lg-3 pl-md-0 pr-md-2"
        >
          <div class="card bg-dark text-white neon-shadow-blue mt-3 mb-5">
            <div class="view">
              <img
                :data-src="require('~/static/skywalker-capa.jpg')"
                alt="Projetos acadêmicos e profissionais"
                class="card-image-stories duotone-cyberpunk-t"
              />
              <div class="mask texture-mask-4"></div>
              <div
                class="card-img-overlay h-100 d-flex flex-column justify-content-end"
              >
                <div class="p-3">
                  <h3 class="">
                    <span class="marker marker-dark marker-title">
                      <strong>Projetos acadêmicos e profissionais</strong>
                    </span>
                  </h3>
                  <p>
                    <span class="marker marker-dark">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </span>
                  </p>
                  <div class="d-flex">
                    <span class="badge badge-warning badge-tag">
                      Última atualização: Jan 20
                    </span>
                  </div>
                </div>

                <nuxt-link
                  to="/pro"
                  class="stretched-link"
                  title="Visualizar projetos"
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 col-md-6 col-12 p-0 pr-lg-0 pl-lg-3 pr-md-0 pl-md-2"
        >
          <div class="card bg-dark text-white neon-shadow-red mt-3 mb-5">
            <div class="view">
              <img
                :data-src="require('~/static/logo-ultimatemercer.jpg')"
                alt="Projetos pessoais"
                class="card-image-stories duotone-cyberpunk-c"
              />
              <div class="mask texture-mask-3"></div>
              <div
                class="card-img-overlay h-100 d-flex flex-column justify-content-end"
              >
                <div class="text-lg-right text-md-right p-3">
                  <h3 class="">
                    <span class="marker marker-dark marker-title">
                      <strong>Projetos pessoais</strong>
                    </span>
                  </h3>
                  <p>
                    <span class="marker marker-dark">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </span>
                  </p>

                  <div class="">
                    <span class="badge badge-warning badge-tag">
                      Última atualização: Jan 20
                    </span>
                  </div>
                </div>
                <nuxt-link
                  to="/personal"
                  class="stretched-link"
                  title="Visualizar projetos"
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Projects'
}
</script>
