<template>
  <Loading v-if="isLoaded"></Loading>
  <section v-else>
    <ul class="Md02HotelList">
      <li v-if="isResults==0" class="md02NoResults">検索結果がありません</li>
      <li v-for="item in HotelLists" class="MdCMN01HotelData">
        <a :href="item.HotelDetailURL" target="_blank">
          <p class="mdCMN01Photo"><img :src="item.PictureURL" :alt="item.HotelName" width="100%"></p>
          <dl class="mdCMN01Dl">
            <dt>{{ item.HotelName }}</dt>
            <dd>{{ item.HotelCaption }}</dd>
          </dl>
        </a>
      </li>
    </ul>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from './Footer.vue'
import Loading from './Loading.vue'

export default {
  name: 'HotelLists',
  components: { Footer, Loading },
  data () {
    return {
      isLoaded: true,
      path: ''
    }
  },
  computed: {
    isResults () {
      return this.$store.state.hotels.results
    },
    HotelLists () {
      return this.$store.state.hotels.Hotel
    }
  },
  async created () {
    this.path = this.$route.path
    await this.$store.dispatch('GET_HOTEL_LISTS', this.$route.params.sarea)
    this.isLoaded = false
  }
}
</script>
