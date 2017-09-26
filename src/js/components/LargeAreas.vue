<template>
  <section>
    <ul class="md01List">
      <li v-for="item in largeareas">
        <router-link :to="`${path}/${item['@attributes'].cd}`">
          {{ item['@attributes'].name }}</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LargeAreas',
  data: function () {
    return {
      path: ''
    }
  },
  computed: {
    largeareas: function () {
      return this.$store.state.largeareas
    }
  },
  created: function () {
    this.path = this.$route.path
    this.$store.dispatch('GET_LARGE_AREAS', this.$route.params.pref)
  }
}
</script>
