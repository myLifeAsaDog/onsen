<template>
  <section>
    <ul class="md01List">
      <li v-for="item in prefs">
        <router-link :to="`${cd}/${item.cd}`">{{ item.name }}</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Prefs',
  data: function () {
    return {
      cd: '',
      prefs: ''
    }
  },
  created: function () {
    this.cd = this.$route.params.reg
    /* この部分、なんか納得がいかない */
    const regions = this.$store.state.region.filter(this._prefsFilter)
    this.prefs = regions[0].prefs
  },
  methods: {
    _prefsFilter: function (element) {
      if (element.cd === this.cd) {
        return element.prefs
      }
    }
  }
}
</script>
