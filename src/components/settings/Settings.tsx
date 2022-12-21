import React, {ChangeEvent} from 'react';
import style from './Settings.module.css'
import styleContainer from '../common/styles/MainContainer.module.css'
import {Button} from '../common/components/button/Button';

type SettingsPropsType = {
    currentMax: number
    currentStart: number
    setCurrentMax: (currentValue: number) => void
    setCurrentStart: (currentValue: number) => void
    setSettings: () => void
    error: boolean
    errorMax: boolean
    setFocusSettings: (value: boolean) => void
    focusCounter: boolean
    setFocusCounter: (value: boolean) => void
}

export const Settings = ({
                             currentMax,
                             currentStart,
                             setCurrentMax,
                             setCurrentStart,
                             setSettings,
                             error,
                             errorMax,
                             setFocusSettings,
                             focusCounter,
                             setFocusCounter
                         }: SettingsPropsType) => {


    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMax(Number(e.currentTarget.value))
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentStart(Number(e.currentTarget.value))
    }

    const changeFocus = () => {
        setFocusSettings(true)
        setFocusCounter(false)
    }

    return (
        <div className={styleContainer.containerParent}>

            <div className={`${styleContainer.containerOfInformation} ${style.settings}`}>

                <div className={style.maxMinContainer}>

                    <span className={style.span}>max value:</span>

                    <input className={errorMax ? `${style.input} ${style.inputError}` : style.input}
                           type={'number'}
                           value={currentMax}
                           onChange={onChangeHandlerMax}
                           onFocus={changeFocus}
                    />
                </div>

                <div className={style.maxMinContainer}>

                    <span className={style.span}>start value:</span>

                    <input className={error ? `${style.input} ${style.inputError}` : style.input}
                           type={'number'}
                           value={currentStart}
                           onChange={onChangeHandlerStart}
                           onFocus={changeFocus}/>
                </div>


            </div>

            <div className={`${styleContainer.containerOfButton} ${style.buttonContainer}`}>
                <Button title={'set'}
                        callback={setSettings}
                        disabled={error || focusCounter}/>
            </div>

        </div>
    );
};