<template>
  <section class="container-fluid pt-5">
    <div class="container p-0">
      <div class="col-12 py-3 px-lg-4">
        <div class="header-profile">
          <div class="col-12 p-0 my-4">
            <div v-lazy-container="{ selector: 'img' }" class="head-avatar">
              <img
                :data-src="require('~/static/me.jpg')"
                width="300"
                class="img-fluid rounded-sm mx-auto d-block"
                alt="Oi, eu sou o Julian"
              />
            </div>
          </div>
          <div class="col-12 p-0">
            <div class="px-lg-4 pt-2">
              <h1 class=" mb-3">
                <span class="marker marker-dark marker-title">
                  <strong>Julian Silva da Cunha a.k.a. Ultimate Mercer</strong>
                </span>
              </h1>

              <h5 class="text-main mt-2 mb-4">
                Sou formado em Tecnologia em Sistemas para Internet no IFSul, e
                atualmente estou cursando o 6º semestre do Design Digital na
                UFPel, tenho 25 anos e moro em Pelotas/RS.
              </h5>
              <div class="d-lg-flex pb-4">
                <a
                  class="badge badge-tag badge-dark badge-pill my-1"
                  href="mailto:juliancunha2010@hotmail.com"
                  target="_blank"
                  rel="noopener"
                  title="Acessar e-mail"
                >
                  <font-awesome-icon
                    :icon="['fas', 'envelope-square']"
                    size="lg"
                  />
                  E-mail
                </a>
                <a
                  class="badge badge-tag badge-dark badge-pill my-1"
                  href="https://github.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="Acessar github"
                >
                  <font-awesome-icon :icon="['fab', 'github']" size="lg" />
                  Github
                </a>
                <a
                  class="badge badge-tag badge-dark badge-pill my-1"
                  href="https://www.facebook.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="Acessar facebook"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-square']"
                    size="lg"
                  />
                  Facebook
                </a>
                <a
                  class="badge badge-tag badge-dark badge-pill my-1"
                  href="https://www.instagram.com/ultimatemercer/"
                  target="_blank"
                  rel="noopener"
                  title="Acessar instagram"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                  Instagram
                </a>
                <a
                  class="badge badge-tag badge-dark badge-pill my-1"
                  href="https://github.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="Linkedin"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
                  Linkedin
                </a>
                <a
                  class="badge badge-tag badge-dark badge-pill my-1"
                  href="https://www.behance.net/ultimatemercer"
                  target="_blank"
                  rel="noopener"
                  title="Behance"
                >
                  <font-awesome-icon
                    :icon="['fab', 'behance-square']"
                    size="lg"
                  />
                  Behance
                </a>
                <a
                  class="badge badge-tag badge-dark badge-pill my-1"
                  href="https://medium.com/@ultimatemercer"
                  target="_blank"
                  rel="noopener"
                  title="Medium"
                >
                  <font-awesome-icon :icon="['fab', 'medium']" size="lg" />
                  Medium
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss"></style>
