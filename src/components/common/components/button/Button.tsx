import React from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}


export const Button = ({title, callback, disabled}: ButtonPropsType) => {
    return (
        <div>
            <button className={style.button}
                    onClick={callback}
                    disabled={disabled}>{title}</button>
        </div>
    );
};