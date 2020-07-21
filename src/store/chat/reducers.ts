import { ChatState, Message, ChatActionTypes, Types as ChatTypes } from './types'

const initialState: ChatState = {
  messages: [],
}

export function chatReducer(state = initialState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case ChatTypes.SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      }
    case ChatTypes.DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message: Message) => message.timestamp !== action.meta.timestamp
        ),
      }
    default:
      return state
  }
}
