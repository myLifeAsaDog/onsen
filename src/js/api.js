import axios from 'axios'

const LARGE_AREA_API = './api/largeArea.php'
const SMALL_AREA_API = './api/smallArea.php'
const HOTEL_LIST_API = './api/hotelList.php'

export default {
  getLargeAreas (prefCD) {
    const endPoint = `${LARGE_AREA_API}?pref=${prefCD}`
    return axios.get(endPoint)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getSmallAreas (largeAreaCD) {
    const endPoint = `${SMALL_AREA_API}?l_area=${largeAreaCD}`
    return axios.get(endPoint)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getHotelLists (smallAreaCD) {
    const endPoint = `${HOTEL_LIST_API}?s_area=${smallAreaCD}`
    return axios.get(endPoint)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
