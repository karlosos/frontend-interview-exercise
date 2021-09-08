import { put, takeEvery, all, call, select } from 'redux-saga/effects'
import { schedule, setToast } from '../store/wizardSlice'
import { requestPutSchedule } from '../api/scheduleLogger'

function * watchSchedule () {
  yield takeEvery(schedule.type, handleSchedule)
}

function * handleSchedule () {
  const selectedNetworkElements = yield select(state => {
    const networkElements = state.networkElements.data
    return networkElements.filter(el => state.wizard.selectedNetworkElements.includes(el.id))
  })
  const selectedOperations = yield select(state => state.wizard.selectedOperations)
  try {
    yield call(requestPutSchedule,
      {
        selectedNetworkElements: selectedNetworkElements,
        selectedOperations: selectedOperations,
        date: Date.now()
      }
    )
    yield put(setToast({ open: true, success: true }))
  } catch (e) {
    console.error(e)
    yield put(setToast({ open: true, success: false }))
  }
}

export default function * rootSaga () {
  yield all([
    watchSchedule()
  ])
}
