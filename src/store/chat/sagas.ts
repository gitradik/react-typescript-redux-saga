import { put } from 'redux-saga/effects'
import { Message, Types } from './types'

export function* sendMessage(action: { payload: Message }) {
  yield put({ type: Types.SEND_MESSAGE, payload: action.payload })
}
