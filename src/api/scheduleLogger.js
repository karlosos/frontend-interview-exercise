import axios from 'axios'

function requestPutSchedule (payload) {
  // URL could be moved to an env variable
  const request = axios.request({
    method: 'post',
    url: 'https://frontend-interview-f788d-default-rtdb.europe-west1.firebasedatabase.app/scheduledNetworkElementsOperations.json',
    data: payload
  })
  return request
}

export { requestPutSchedule }
