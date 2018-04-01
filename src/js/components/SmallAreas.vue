<template>
  <section>
    <h2>{{ title }}</h2>
    <ul class="Md01List">
      <li v-if="hasAreas"><a href="#">Now Loading</a></li>
      <li v-else v-for="item in smallareas" @click="SelectSmallArea(item.name)">
        <router-link :to="`${path}/${item.cd}`">
          {{ item.name }}</router-link></li>
    </ul>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'SmallAreas',
  components: { Footer },
  data () {
    return {
      path: ''
    }
  },
  computed: {
    title () {
      return this.$store.state.selected.larea
    },
    hasAreas () {
      return this.$store.state.smallareas === ''
    },
    smallareas () {
      return this.$store.state.smallareas
    }
  },
  created () {
    this.path = this.$route.path
    this.$store.dispatch('GET_SMALL_AREAS', this.$route.params.larea)
  },
  methods: {
    SelectSmallArea (smallAreaName) {
      this.$store.commit('SET_SELECTED_S_AREA', smallAreaName)
    }
  }
}
</script>
