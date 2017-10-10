<template>
  <Loading v-if="isLoaded"></Loading>
  <section v-else>
    <h3>検索件数：{{ isResults }}件</h3>
    <ul class="Md02HotelList">
      <li v-if="isResults==0" class="md02NoResults">検索結果がありません</li>
      <li v-for="item in HotelLists" class="MdCMN01HotelData">
        <a :href="item.HotelDetailURL" target="_blank">
          <div class="mdCMN01Photo">
            <img :src="item.PictureURL" :alt="item.HotelName" width="100%">
            <dl class="mdCMN01Meta">
              <dt>{{ item.HotelName }}</dt>
              <dd>
                <ul>
                  <li>{{ item.OnsenName }}</li>
                  <li>&starf; {{ item.Rating | isNull }}</li>
                  <li>&yen; {{ item.SampleRateFrom | currency }}</li>
                </ul>
              </dd>
            </dl>
          </div>
          <p class="mdCMN01Txt">{{ item.HotelCaption }}</p>
        </a>
      </li>
    </ul>
    <ol class="mdCMN02Pager">
      <li :class="{ 'ExDisabled':isPrev }" @click="prevPage">前の50件</li>
      <li :class="{ 'ExDisabled':isNext }" @click="nextPage">次の50件</li>
    </ol>
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
    isPrev () {
      return (this.$store.state.hotels.DisplayFrom === '1')
    },
    isNext () {
      return (this.$store.state.hotels.results - this.DisplayFrom) < 50
    },
    DisplayFrom () {
      return this.$store.state.hotels.DisplayFrom
    },
    DisplayPerPage () {
      return this.$store.state.hotels.DisplayPerPage
    },
    HotelLists () {
      return this.$store.state.hotels.Hotel
    }
  },
  filters: {
    currency (value) {
      return String(value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    },
    isNull (value) {
      return (value) || '-'
    }
  },
  async created () {
    this.path = this.$route.path
    await this.$store.dispatch('GET_HOTEL_LISTS', {
      smallAreaCD: this.$route.params.sarea,
      startPage: 1
    })
    this.isLoaded = false
  },
  beforeUpdate () {
    window.scroll(0, 0)
  },
  methods: {
    prevPage () {
      this.$store.dispatch('GET_HOTEL_LISTS', {
        smallAreaCD: this.$route.params.sarea,
        startPage: parseInt(this.DisplayFrom, 10) - 50
      })
    },
    nextPage () {
      this.$store.dispatch('GET_HOTEL_LISTS', {
        smallAreaCD: this.$route.params.sarea,
        startPage: parseInt(this.DisplayFrom, 10) + parseInt(this.DisplayPerPage, 10)
      })
    }
  }
}
</script>
