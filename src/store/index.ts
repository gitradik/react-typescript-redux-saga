import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducers'
import rootSaga from './rootSaga'

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  const middleware = [sagaMiddleware]

  const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))
  sagaMiddleware.run(rootSaga)
  return store
}
