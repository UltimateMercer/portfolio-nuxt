<template>
  <header class="container-fluid mt-5 pt-4">
    <div class="container pb-lg-5 pb-3 px-lg-0">
      <div class="py-5 px-lg-4">
        <h1 class="mt-3 mb-3 ">
          <strong> Oi! Eu sou o </strong>
          <span class="marker marker-dark marker-title">
            <strong>Julian</strong>
          </span>
          <strong>, mas pode me chamar de </strong>
          <span class="marker marker-dark marker-title">
            <strong>Ultimate Mercer</strong>
          </span>
        </h1>
        <h5 class="text-main mt-2 mb-4">
          Sou formado em Tecnologia em Sistemas para Internet no IFSul, e
          atualmente estou cursando o 6º semestre do Design Digital na UFPel,
          tenho 25 anos e moro em Pelotas/RS.
        </h5>
        <div class="d-md-flex">
          <a
            class="badge badge-dark badge-pill my-1"
            href="mailto:juliancunha2010@hotmail.com"
            target="_blank"
            rel="noopener"
            title="E-mail"
          >
            <font-awesome-icon :icon="['fas', 'envelope-square']" size="lg" />
            E-mail
          </a>
          <a
            class="badge badge-dark badge-pill my-1"
            href="https://github.com/UltimateMercer"
            target="_blank"
            rel="noopener"
            title="Github"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
            Github
          </a>
          <a
            class="badge badge-dark badge-pill my-1"
            href="https://www.facebook.com/UltimateMercer"
            target="_blank"
            rel="noopener"
            title="Facebook"
          >
            <font-awesome-icon :icon="['fab', 'facebook-square']" size="lg" />
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
            <font-awesome-icon :icon="['fab', 'behance-square']" size="lg" />
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
  </header>
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
  font-size: 1.375rem;
}

.text-size {
  font-size: 1.125rem;
}
</style>
