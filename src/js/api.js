import axios from 'axios'

const API = 'xmltojson.php'

export default {
  getLargeAreas (prefCD) {
    const endPoint = `${API}?pref=${prefCD}`
    return axios.get(endPoint)
      .then((response) => {
        return response.data.Area.Region.Prefecture.LargeArea
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getSmallAreas (largeAreaCD) {
    const endPoint = `${API}?l_area=${largeAreaCD}`
    return axios.get(endPoint)
      .then((response) => {
        return response.data.Area.Region.Prefecture.LargeArea.SmallArea
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getHotelLists (smallAreaCD) {
    const endPoint = `${API}?s_area=${smallAreaCD}`
    return axios.get(endPoint)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getHotelDetail (HotelID) {
    const endPoint = `${API}?h_id=${HotelID}`
    return axios.get(endPoint)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
