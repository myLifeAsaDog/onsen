<template>
  <section>
    <ul class="md01List">
      <li v-for="item in HotelLists">
        <router-link :to="`${path}/${item.HotelID}`">
          {{ item.HotelName }}</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HotelLists',
  data: function () {
    return {
      path: ''
    }
  },
  computed: {
    HotelLists: function () {
      return this.$store.state.hotels.Hotel
    }
  },
  created: function () {
    this.path = this.$route.path
    this.$store.dispatch('GET_HOTEL_LISTS', this.$route.params.sarea)
  }
}
</script>
