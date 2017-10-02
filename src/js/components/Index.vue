<template>
  <section>
    <h2>地域選択</h2>
    <ul class="Md01List">
      <li v-for="item in this.$store.state.region">
        <router-link :to="`/${item.cd}`">{{ item.name }}</router-link></li>
    </ul>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'Index',
  components: { Footer }
}
</script>
