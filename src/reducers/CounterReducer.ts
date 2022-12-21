import {StateType} from '../App';

type ActionType = IncreaseTypeAC
    | ResetTypeAC
    | SetTypeAC

export const CounterReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE-VALUE': {
            return {...state, currentValue: state.currentValue + 1}
        }
        case 'RESET-VALUE': {
            return {...state, currentValue: state.startValue}
        }
        case 'SET-SETTINGS': {
            return {
                ...state,
                currentValue: action.payload.currentStart,
                startValue: action.payload.currentStart,
                maxValue: action.payload.currentMax
            }
        }
        default:
            return state
    }
};


type IncreaseTypeAC = ReturnType<typeof IncreaseAC>
export const IncreaseAC = () => {
    return {
        type: 'INCREASE-VALUE',
    } as const
}

type ResetTypeAC = ReturnType<typeof ResetAC>
export const ResetAC = () => {
    return {
        type: 'RESET-VALUE',
    } as const
}

type SetTypeAC = ReturnType<typeof SetAC>
export const SetAC = (currentMax: number, currentStart: number) => {
    return {
        type: 'SET-SETTINGS',
        payload: {currentMax, currentStart}
    } as const
}

