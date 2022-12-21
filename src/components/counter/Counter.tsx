import React from 'react';
import style from './Counter.module.css'
import styleContainer from '../common/styles/MainContainer.module.css'
import {Button} from '../common/components/button/Button';
import {StateType} from '../../App';

type CounterPropsType = {
    state: StateType
    inc: () => void
    res: () => void
    errorValue: boolean
    errorValueMax: boolean
    focusSettings: boolean
}

export const Counter = ({state, inc, res, errorValue, errorValueMax, focusSettings}: CounterPropsType) => {

    return (
        <div className={styleContainer.containerParent}>

            <div
                className={state.currentValue < state.maxValue
                    ? `${styleContainer.containerOfInformation} ${style.count}`
                    : `${styleContainer.containerOfInformation} ${style.count} ${style.error}`}>{errorValue || errorValueMax
                ? <div className={`${style.message} ${style.error}`}>Incorrect Value!</div>
                : focusSettings
                    ? <div className={style.message}>Enter values and press 'set'</div>
                    : state.currentValue}</div>

            <div className={`${styleContainer.containerOfButton} ${style.buttonContainer}`}>

                <Button title={'inc'}
                        callback={inc}
                        disabled={state.currentValue === state.maxValue || focusSettings}/>

                <Button title={'reset'}
                        callback={res}
                        disabled={focusSettings}/>

            </div>

        </div>
    );
};