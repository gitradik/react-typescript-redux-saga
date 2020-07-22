import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import throttle from 'lodash.throttle'

import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducers'
import rootSaga from './rootSaga'

import { loadState, saveState } from '../localStorage'

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  const middleware = [sagaMiddleware]

  const store = createStore(rootReducer, loadState(), compose(applyMiddleware(...middleware)))

  sagaMiddleware.run(rootSaga)

  store.subscribe(
    throttle(() => {
      saveState({ chat: store.getState().chat })
    }, 1000)
  )

  return store
}
