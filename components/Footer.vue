<template>
  <div class="container-fluid bg-light">
    <div class="container">
      <footer class="mt-5 py-3 pt-md-4">
        <div class="row">
          <div class="col-12 col-md">
            <img
              class="img-fluid brand mb-2"
              src="~/static/logo-dark.png"
              alt="Ultimate Mercer Logo"
              width="55"
            />
            <small class="d-block mb-3 text-muted">&copy;2020</small>
          </div>
          <div class="col-6 col-md">
            <h4>Redes sociais</h4>
            <ul class="list-unstyled">
              <li class="">
                <a
                  href="mailto:juliancunha2010@hotmail.com"
                  class="text-dark"
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
              </li>
              <li>
                <a
                  class="text-dark"
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
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ultimatemercer/"
                  class="text-dark mb-2"
                  target="_blank"
                  rel="noopener"
                  title="Instagram"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/UltimateMercer"
                  class="text-dark"
                  target="_blank"
                  rel="noopener"
                  title="LinkedIn"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/ultimatemercer"
                  class="text-dark"
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
              </li>
              <li>
                <a
                  href="https://medium.com/@ultimatemercer"
                  class="text-dark"
                  target="_blank"
                  rel="noopener"
                  title="Medium"
                >
                  <font-awesome-icon :icon="['fab', 'medium']" size="lg" />
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Conteúdo</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-dark" href="#">Resource</a></li>
              <li><a class="text-dark" href="#">Resource name</a></li>
              <li><a class="text-dark" href="#">Another resource</a></li>
              <li><a class="text-dark" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Sobre</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-dark" href="about.html">Team</a></li>
              <li><a class="text-dark" href="#">Locations</a></li>
              <li><a class="text-dark" href="#">Privacy</a></li>
              <li><a class="text-dark" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
