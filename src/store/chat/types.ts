export interface Message {
  user: string
  message: string
  timestamp: number
}

export interface ChatState {
  messages: Message[]
}

export enum Types {
  CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE',
  SEND_MESSAGE = 'SEND_MESSAGE',
  DELETE_MESSAGE = 'DELETE_MESSAGE',
}

interface SendMessageAction {
  type: typeof Types.SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof Types.DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction
