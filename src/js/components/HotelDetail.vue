<template>
  <section>
    <ul class="md01List">
      <li>
        <img :src="hotelDetail.PictureURL" :alt="hotelDetail.PictureCaption" width="100%">
        {{ hotelDetail.HotelName }}
        {{ hotelDetail.HotelCaption }}
        {{ hotelDetail.HotelDetailURL }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HotelDetail',
  computed: {
    hotelDetail: function () {
      return this.$store.state.hoteldetail.Hotel
    }
  },
  created: function () {
    this.path = this.$route.path
    this.$store.dispatch('GET_HOTEL_DETAIL', this.$route.params.hid)
  }
}
</script>
