<template>
  <section>
    <h2>{{ title }}</h2>
    <ul class="Md01List">
      <li v-for="item in prefs">
        <router-link :to="`${cd}/${item.cd}`">{{ item.name }}</router-link></li>
    </ul>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'Prefs',
  components: { Footer },
  data () {
    return {
      title: '',
      cd: '',
      prefs: ''
    }
  },
  created () {
    this.cd = this.$route.params.reg
    /* この部分、なんか納得がいかない */
    const regions = this.$store.state.region.filter(this._prefsFilter)
    this.title = regions[0].name
    this.prefs = regions[0].prefs
  },
  methods: {
    _prefsFilter (element) {
      if (element.cd === this.cd) {
        return element.prefs
      }
    }
  }
}
</script>
