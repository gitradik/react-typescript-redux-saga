import * as Effects from 'redux-saga/effects'
import { Types as ChatTypes } from './chat/types'
import { sendMessage } from './chat/sagas'

const takeLatest: any = Effects.takeLatest

function* rootSaga() {
  // Chat
  yield takeLatest(ChatTypes.CHAT_SEND_MESSAGE, sendMessage)
}

export default rootSaga
