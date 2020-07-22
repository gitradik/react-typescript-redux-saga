import { put } from 'redux-saga/effects'
import { Message, Types } from './types'

export function* sendMessage(obj: { payload: Message }) {
  yield put({ type: Types.SEND_MESSAGE, payload: obj.payload })
}
