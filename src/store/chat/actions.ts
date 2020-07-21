import { Message, Types, ChatActionTypes } from './types'

export function sendMessage(msg: Message): ChatActionTypes {
  return {
    type: Types.SEND_MESSAGE,
    payload: msg,
  }
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: Types.DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  }
}
