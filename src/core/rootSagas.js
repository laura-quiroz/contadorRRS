import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Actions from './actions'

function* mostrarDespuesS(action) {
  yield delay(3000)
  yield put({ type: 'Esperando la suma...' })
  yield put({ type: Actions.SUMAR })
}

function* mostrarDespuesR(action) {
  yield delay(3000)
  yield put({ type: 'Esperando la resta...' })
  yield put({ type: Actions.RESTAR })
}

function* watchDespues() {
  yield takeEvery(Actions.ESPERA_SUMAR, mostrarDespuesS)
  yield takeEvery(Actions.ESPERA_RESTAR, mostrarDespuesR)
}

export default watchDespues
