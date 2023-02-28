import {combineReducers, legacy_createStore} from 'redux';
import {CounterReducer} from '../reducers/CounterReducer';

const rootReducer = combineReducers({
    counter: CounterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

let preloadedState;
const persistedString = localStorage.getItem('appState')
if (persistedString) {
    preloadedState = JSON.parse(persistedString)
}

export const store = legacy_createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('appState', JSON.stringify(store.getState()))
})

// @ts-ignore
window.store = store