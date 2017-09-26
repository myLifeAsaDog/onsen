<template>
  <section>
    <ul class="md01List">
      <li v-for="item in smallareas">
        <router-link :to="`${path}/${item['@attributes'].cd}`">
          {{ item['@attributes'].name }}</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SmallAreas',
  data: function () {
    return {
      path: ''
    }
  },
  computed: {
    smallareas: function () {
      return this.$store.state.smallareas
    }
  },
  created: function () {
    this.path = this.$route.path
    this.$store.dispatch('GET_SMALL_AREAS', this.$route.params.larea)
  }
}
</script>
