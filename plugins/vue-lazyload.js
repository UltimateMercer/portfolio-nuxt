import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// import error from '~/static/loading.jpg'
// import loading from '~/static/loading.jpg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('~/static/error.jpg'),
  loading: require('~/static/loading.jpg'),
  attempt: 1
})
