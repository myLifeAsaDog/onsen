<template>
  <section>
    <ul class="md01List">
      <li v-for="item in this.$store.state.region">
        <router-link :to="`/${item.cd}`">{{ item.name }}</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Index'
}
</script>
