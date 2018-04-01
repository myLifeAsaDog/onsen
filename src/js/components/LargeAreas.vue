<template>
  <section>
    <h2>{{ title }}</h2>
    <ul class="Md01List">
      <li v-if="hasAreas"><a href="#">Now Loading</a></li>
      <li v-else v-for="item in largeareas">
        <router-link :to="`${path}/${item.cd}`">
          {{ item.name }}</router-link></li>
    </ul>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'LargeAreas',
  components: { Footer },
  data () {
    return {
      path: ''
    }
  },
  computed: {
    title () {
      return this.$store.state.selected.pref
    },
    hasAreas () {
      return this.$store.state.largeareas === ''
    },
    largeareas () {
      return this.$store.state.largeareas
    }
  },
  created () {
    this.path = this.$route.path
    this.$store.dispatch('GET_LARGE_AREAS', this.$route.params.pref)
  }
}
</script>
