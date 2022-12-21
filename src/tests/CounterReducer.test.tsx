import {CounterReducer, IncreaseAC, SetAC} from '../reducers/CounterReducer';

test('Value should be increased by one', () => {

    const startState = {
        startValue: 0,
        maxValue: 5,
        currentValue: 0
    }

    const endState = CounterReducer(startState, IncreaseAC())

    expect(endState.currentValue).toBe(1)
})

test('Value should be reset', () => {

    const startState = {
        startValue: 1,
        maxValue: 5,
        currentValue: 0
    }

    const endState = CounterReducer(startState, {type: 'RESET-VALUE'})

    expect(endState.currentValue).toBe(1)
})

test('Settings must be applied', () => {

    const startState = {
        startValue: 0,
        maxValue: 5,
        currentValue: 0
    }

    const endState = CounterReducer(startState, SetAC(8, 3))

    expect(endState.currentValue).toBe(3)
    expect(endState.maxValue).toBe(8)
    expect(endState.startValue).toBe(3)

})

