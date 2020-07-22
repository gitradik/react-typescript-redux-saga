import { SystemState, Types, SystemActionTypes } from './types'

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: Types.UPDATE_SESSION,
    payload: newSession,
  }
}
