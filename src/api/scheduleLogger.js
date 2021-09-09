import axios from 'axios'

function requestPutSchedule (payload) {
  const request = axios.request({
    method: 'post',
    url: 'https://frontend-interview-f788d-default-rtdb.europe-west1.firebasedatabase.app/scheduledNetworkElementsOperations.json',
    data: payload
  })
  return request
}

export { requestPutSchedule }
