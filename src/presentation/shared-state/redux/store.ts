import {
  Action,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import { BehaviorSubject } from 'rxjs'

import { createEpicManager } from './epic'
import { authenticationEpic, configurationEpic } from './epics'
import { createReducerManager } from './reducer'
import { authenticationReducer, configurationReducer } from './reducers'
import { RootStoreState, StoreContainer } from './types'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore(): StoreContainer {
  const reducerManager = createReducerManager({
    authentication: authenticationReducer,
    configuration: configurationReducer,
  })
  const { rootEpic, epicMiddleware, epic$, addEpic } = createEpicManager(
    {},
    authenticationEpic,
    configurationEpic,
  )
  // Create a store with the root reducer function being the one exposed by the manager.

  const action$ = new BehaviorSubject<Action>({ type: 'init' })
  const reducer = (
    state: RootStoreState | undefined,
    action: Action<string>,
  ) => {
    action$.next(action)
    return reducerManager.reduce(state, action)
  }
  const store = createStore<RootStoreState, Action<string>, any, any>(
    reducer,
    composeEnhancer(applyMiddleware(epicMiddleware)),
  )
  epicMiddleware.run(rootEpic)

  // Optional: Put the reducer manager on the store so it is easily accessible
  return {
    reducerManager,
    store,
    epic$,
    action$,
    addEpic,
  }
}
