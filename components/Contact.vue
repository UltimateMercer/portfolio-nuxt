<template>
  <div class="container-fluid bg-light">
    <div class="container p-0">
      <div class="py-4">
        <h2 class="mb-3">
          <strong>
            Contato
          </strong>
        </h2>
        <h4 class="text-main mb-4">
          Se você quiser entrar em contato comigo, você pode entrar em contato
          pelo ou pelas minhas redes sociais abaixo!
        </h4>
        <div class="my-4 text-center">
          <a
            class="btn btn-outline-v2-dark my-1"
            href="https://www.facebook.com/UltimateMercer"
            target="_blank"
            rel="noopener"
            title="Facebook"
          >
            <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" />
          </a>
          <a
            href="https://www.instagram.com/ultimatemercer/"
            class="btn btn-outline-v2-dark btn-link my-1"
            target="_blank"
            rel="noopener"
            title="Instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
          </a>
          <!--a-- href="https://twitter.com/UltimateMercer" class="text-dark mx-1">
                                    <i class="fab fa-twitter-square fa-2x"></i>
                                </!--a-->
          <a
            href="https://github.com/UltimateMercer"
            class="btn btn-outline-v2-dark btn-link my-1"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </a>
          <a
            href="https://www.behance.net/ultimatemercer"
            class="btn btn-outline-v2-dark btn-link my-1"
            target="_blank"
            rel="noopener"
            title="Behance"
          >
            <font-awesome-icon :icon="['fab', 'behance-square']" size="2x" />
          </a>
          <a
            href="https://medium.com/@ultimatemercer"
            class="btn btn-outline-v2-dark btn-link my-1"
            target="_blank"
            rel="noopener"
            title="Medium"
          >
            <font-awesome-icon :icon="['fab', 'medium']" size="2x" />
          </a>
          <a
            href="mailto:juliancunha2010@hotmail.com"
            class="btn btn-outline-v2-dark btn-link my-1"
            target="_blank"
            rel="noopener"
            title="E-mail"
          >
            <font-awesome-icon :icon="['fas', 'envelope-square']" size="2x" />
          </a>
        </div>
        <!--img
          v-lazy-load
          data-src="~/static/goku.gif"
          class="img-fluid mx-auto d-block rounded-lg"
          alt=""
        /-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact'
}
</script>
