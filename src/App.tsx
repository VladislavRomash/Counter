import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Settings} from './components/settings/Settings';
import {SetAC} from './reducers/CounterReducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from './state/store';

export type StateType = {
    startValue: number
    maxValue: number
    currentValue: number
}

function App() {

    const state = useSelector<RootStateType, StateType>(state => state.counter)

    const dispatch = useDispatch()

    const [currentMax, setCurrentMax] = useState<number>(state.maxValue)
    const [currentStart, setCurrentStart] = useState<number>(state.startValue)

    const [focusSettings, setFocusSettings] = useState<boolean>(false)
    const [focusCounter, setFocusCounter] = useState<boolean>(true)

    const errorValue = currentStart < 0 || currentStart >= currentMax
    const errorValueMax = currentMax < 0 || currentStart >= currentMax

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

            <Counter
                errorValue={errorValue}
                errorValueMax={errorValueMax}
                focusSettings={focusSettings}
            />

        </div>
    );
}

export default App;
