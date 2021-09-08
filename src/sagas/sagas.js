import { put, takeEvery, all } from 'redux-saga/effects'
import { schedule, setToast } from '../store/wizardSlice'

function * watchSchedule () {
  yield takeEvery(schedule.type, handleSchedule)
}

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function * handleSchedule () {
  yield delay(1000)
  yield put(setToast({ open: true, success: false }))
}

export default function * rootSaga () {
  yield all([
    watchSchedule()
  ])
}
