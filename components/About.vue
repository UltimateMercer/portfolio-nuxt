<template>
  <section class="container-fluid bg-light">
    <div class="container p-0">
      <div class="col-12 py-3 px-lg-4">
        <div class="header-profile">
          <div class="col-12 p-0 mb-4">
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
            <div class="head-text">
              <h1 class="blog-title">
                <span class="marker marker-dark marker-title">
                  Julian Silva da Cunha
                </span>
              </h1>
              <h5 class="blog-meta">
                <span class="marker marker-dark">
                  Sou formado em Tecnologia em Sistemas para Internet no IFSul,
                  e atualmente estou cursando o 6º semestre do Design Digital na
                  UFPel, tenho 25 anos e moro em Pelotas/RS.
                </span>
              </h5>
              <div class="d-md-flex">
                <a
                  class="badge badge-dark badge-pill my-1"
                  href="mailto:juliancunha2010@hotmail.com"
                  target="_blank"
                  rel="noopener"
                  title="E-mail"
                >
                  <font-awesome-icon
                    :icon="['fas', 'envelope-square']"
                    size="lg"
                  />
                  E-mail
                </a>
                <a
                  class="badge badge-dark badge-pill my-1"
                  href="https://www.facebook.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="Facebook"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-square']"
                    size="lg"
                  />
                  Facebook
                </a>
                <a
                  class="badge badge-dark badge-pill my-1"
                  href="https://www.instagram.com/ultimatemercer/"
                  target="_blank"
                  rel="noopener"
                  title="Instagram"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                  Instagram
                </a>
                <a
                  class="badge badge-dark badge-pill my-1"
                  href="https://github.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="LinkedIn"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
                  Linkedin
                </a>
                <a
                  class="badge badge-dark badge-pill my-1"
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
                  class="badge badge-dark badge-pill my-1"
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
    <div class="container p-0">
      <div class="pb-1 px-lg-4 px-1">
        <h2 class=" mt-3 mb-3"><strong>Sobre mim</strong></h2>
        <div class="text-size">
          <p class="mb-4">
            Do início de 2013 a setembro de 2016, estudei no Instituto Federal
            Sul-riograndense no curso superior em tecnologias em sistemas para
            internet. Recém formado fui em busca de algumas oportunidades, mas
            infelizmente as que apareceram não se concretizaram.
          </p>
          <p class="mb-4">
            Foi então que no fim de 2017, retornei à universidade, desta vez na
            Universidade Federal de Pelotas, no curso de bacharelado em Design
            Digital, sendo esta uma oportunidade para aprender ainda mais, e
            numa área que eu curti trabalhar desde o IFSul, Web
            Design/Desenvolvimento Front-end.
          </p>
          <p class="mb-4">
            Neste período em que estou no design da UFPel, tive diversas
            oportunidades de interagir e aprender com diferentes áreas e
            diferentes atividades, sendo mais recentemente uma das minhas
            paixões atuais a edição digital, onde curto criar algumas imagens a
            partir de algumas ideias (sendo basicamente um hobby). Além disso,
            este curso tem me oferecido a oportunidade de conhecer diferentes
            pessoas e a desenvolver melhor a minha visão do mundo.
          </p>
          <p class=" mb-4">
            No meio disso tudo também tive a oportunidade de ingressar em um
            curso de inglês na Topway, para poder me qualificar ainda mais.
          </p>
          <p class=" mb-4">
            Além do mais, este curso tem me ensinado a ser mais criativo, onde
            sempre que possível, em algumas atividades procuro desenvolver
            alguns websites, assim posso seguir aprimorando tanto o conhecimento
            em design como desenvolver o front-end dos projetos.
          </p>
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
