import React from 'react';
import style from './Counter.module.css'
import styleContainer from '../common/styles/MainContainer.module.css'
import {Button} from '../common/components/button/Button';
import {StateType} from '../../App';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../state/store';
import {IncreaseAC, ResetAC} from '../../reducers/CounterReducer';

type CounterPropsType = {
    errorValue: boolean
    errorValueMax: boolean
    focusSettings: boolean
}

export const Counter = ({errorValue, errorValueMax, focusSettings}: CounterPropsType) => {

    const state = useSelector<RootStateType, StateType>(state => state.counter)

    const dispatch = useDispatch()

    const increaseFn = () => {
        if (state.currentValue < state.maxValue) {
            dispatch(IncreaseAC())
        } else return state.currentValue
    }

    const resetFn = () => {
        dispatch(ResetAC())
    }

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
                        callback={increaseFn}
                        disabled={state.currentValue === state.maxValue || focusSettings}/>

                <Button title={'reset'}
                        callback={resetFn}
                        disabled={focusSettings}/>

            </div>

        </div>
    );
};