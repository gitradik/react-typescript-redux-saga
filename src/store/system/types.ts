export interface SystemState {
  loggedIn: boolean
  session: string
  userName: string
}

export enum Types {
  UPDATE_SESSION = 'UPDATE_SESSION',
}

interface UpdateSessionAction {
  type: typeof Types.UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction
