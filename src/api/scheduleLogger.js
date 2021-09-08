import axios from 'axios'

function requestPutSchedule (payload) {
  console.log('request put schedule', payload)
  return axios.request({
    method: 'post',
    url: 'https://frontend-interview-f788d-default-rtdb.europe-west1.firebasedatabase.app/scheduledNetworkElementsOperations.json',
    data: payload
  })
}

export { requestPutSchedule }
