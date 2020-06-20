<template>
  <div class="container-fluid">
    <div class="container py-2 px-lg-0">
      <div class="sticky-top pt-4 pb-3 px-1">
        <div class="row">
          <div class="col-lg-4">
            <div v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="require('~/static/me.jpg')"
                class="img-fluid d-block mx-auto rounded-sm my-lg-3 my-2"
                width="250"
                title="Oi, eu sou o Julian"
                alt="Julian"
              />
            </div>
          </div>
          <div class="col-lg-8 pl-lg-0 my-3">
            <h1 class="mt-2 mb-1">
              <span class="marker marker-dark marker-title">
                <strong>Julian Silva da Cunha</strong>
              </span>
            </h1>
            <!--h1 class="mb-2">
              <span class="marker marker-dark marker-title">
                <strong>Ultimate Mercer</strong>
              </span>
            </!--h1-->
            <div class="">
              <h5>
                <span class="badge badge-primary badge-tag text-dark">
                  Desenvolvedor Front-End/Web</span
                >
                <span class="badge badge-uv badge-tag"
                  >Estudante de Design Digital</span
                >
              </h5>
            </div>
            <h4 class="text-main my-2">
              Formado em Tecnologia em Sistemas para Internet no IFSul, e
              atualmente estou cursando o 6º semestre do Design Digital na
              UFPel, tenho 25 anos e moro em Pelotas/RS.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonalHeader'
}
</script>

<style lang="scss">
.text-main {
  font-weight: 400;
  line-height: 1.3333;
  font-size: 1.5rem;
}

.text-size {
  font-size: 1.125rem;
}
</style>
