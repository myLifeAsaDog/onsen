import 'babel-polyfill' // need for async/await
import API from './api'

import Region from './data/Region.js'

export default {
  state: {
    selected: {
      pref: '',
      larea: '',
      sarea: ''
    },
    region: Region,
    largeareas: [],
    smallareas: [],
    hotels: { Hotel: [{ HotelID: '' }] }
  },
  mutations: {
    SET_SELECTED_PREF (state, dataParam) {
      state.selected.pref = dataParam
    },
    SET_SELECTED_L_AREA (state, dataParam) {
      state.selected.larea = dataParam
    },
    SET_SELECTED_S_AREA (state, dataParam) {
      state.selected.sarea = dataParam
    },
    SET_LARGE_AREAS (state, dataParam) {
      state.largeareas = dataParam
    },
    SET_SMALL_AREAS (state, dataParam) {
      state.smallareas = dataParam
    },
    SET_HOTEL_LISTS (state, dataParam) {
      state.hotels = dataParam
    }
  },
  actions: {
    async GET_LARGE_AREAS (context, payload) {
      context.commit('SET_LARGE_AREAS', '')
      const dataParam = await API.getLargeAreas(payload)
      context.commit('SET_SELECTED_PREF', dataParam.title)
      context.commit('SET_LARGE_AREAS', dataParam.largeArea)
    },
    async GET_SMALL_AREAS (context, payload) {
      context.commit('SET_SMALL_AREAS', '')
      const dataParam = await API.getSmallAreas(payload)
      context.commit('SET_SELECTED_L_AREA', dataParam.title)
      context.commit('SET_SMALL_AREAS', dataParam.smallArea)
    },
    async GET_HOTEL_LISTS (context, payload) {
      context.commit('SET_HOTEL_LISTS', '')
      const dataParam = await API.getHotelLists(payload)
      context.commit('SET_HOTEL_LISTS', dataParam)
    }
  }
}
