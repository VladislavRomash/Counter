import React, {useReducer, useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Settings} from './components/settings/Settings';
import {CounterReducer, IncreaseAC, ResetAC, SetAC} from './reducers/CounterReducer';

export type StateType = {
    startValue: number
    maxValue: number
    currentValue: number
}

function App() {

    const [state, dispatch] = useReducer(CounterReducer, {
        startValue: 0,
        maxValue: 5,
        currentValue: 0
    })

    const [currentMax, setCurrentMax] = useState<number>(state.maxValue)
    const [currentStart, setCurrentStart] = useState<number>(state.startValue)

    const [focusSettings, setFocusSettings] = useState<boolean>(false)
    const [focusCounter, setFocusCounter] = useState<boolean>(true)

    const errorValue = currentStart < 0 || currentStart >= currentMax
    const errorValueMax = currentMax < 0 || currentStart >= currentMax

    const increaseFn = () => {
        if (state.currentValue < state.maxValue) {
            dispatch(IncreaseAC())
        } else return state.currentValue
    }

    const resetFn = () => {
        dispatch(ResetAC())
    }

    const setSettingsFn = () => {
        dispatch(SetAC(currentMax, currentStart))
        setFocusSettings(false)
        setFocusCounter(true)
    }

    return (
        <div className="App">

            <Settings currentMax={currentMax}
                      currentStart={currentStart}
                      setCurrentMax={setCurrentMax}
                      setCurrentStart={setCurrentStart}
                      setSettings={setSettingsFn}
                      error={errorValue}
                      errorMax={errorValueMax}
                      setFocusSettings={setFocusSettings}
                      focusCounter={focusCounter}
                      setFocusCounter={setFocusCounter}
            />

            <Counter state={state}
                     inc={increaseFn}
                     res={resetFn}
                     errorValue={errorValue}
                     errorValueMax={errorValueMax}
                     focusSettings={focusSettings}
            />

        </div>
    );
}

export default App;
