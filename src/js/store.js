import 'babel-polyfill' // need for async/await
import API from './api'

import Region from './data/Region.js'

export default {
  state: {
    region: Region,
    largeareas: '',
    smallareas: '',
    hotels: '',
    hoteldetail: ''
  },
  mutations: {
    SET_LARGE_AREAS (state, dataParam) {
      state.largeareas = dataParam
    },
    SET_SMALL_AREAS (state, dataParam) {
      state.smallareas = dataParam
    },
    SET_HOTEL_LISTS (state, dataParam) {
      state.hotels = dataParam
    },
    SET_HOTEL_DETAIL (state, dataParam) {
      state.hoteldetail = dataParam
    }
  },
  actions: {
    async GET_LARGE_AREAS (context, payload) {
      const dataParam = await API.getLargeAreas(payload)
      context.commit('SET_LARGE_AREAS', dataParam)
    },
    async GET_SMALL_AREAS (context, payload) {
      const dataParam = await API.getSmallAreas(payload)
      context.commit('SET_SMALL_AREAS', dataParam)
    },
    async GET_HOTEL_LISTS (context, payload) {
      const dataParam = await API.getHotelLists(payload)
      context.commit('SET_HOTEL_LISTS', dataParam.data)
    },
    async GET_HOTEL_DETAIL (context, payload) {
      const dataParam = await API.getHotelDetail(payload)
      context.commit('SET_HOTEL_DETAIL', dataParam.data)
    }
  }
}
