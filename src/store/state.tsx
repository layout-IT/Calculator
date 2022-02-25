import {makeAutoObservable} from "mobx";
import {createContext, FC, useContext} from "react";
import {log} from "util";

type buttonType = {
    id: number,
    button: string,
}

type stateType = Array<buttonType>

class State {
    result = 0
    action = ''
    state: stateType = [
        {id: 1, button: 'AC'},
        {id: 2, button: 'DEL'},
        {id: 3, button: '%'},
        {id: 4, button: '/'},
        {id: 5, button: '7'},
        {id: 6, button: '8'},
        {id: 7, button: '9'},
        {id: 8, button: '*'},
        {id: 9, button: '4'},
        {id: 10, button: '5'},
        {id: 11, button: '6'},
        {id: 12, button: '+'},
        {id: 13, button: '1'},
        {id: 14, button: '2'},
        {id: 15, button: '3'},
        {id: 16, button: '-'},
        {id: 17, button: '.'},
        {id: 18, button: '0'},
        {id: 19, button: '='},
    ]

    constructor () {
        makeAutoObservable(this)
    }

    setsZeroIfTheFirstPointIs (button: string) {
        if (this.action.length === 0 && button === '.') {
            this.action = '0'
        }
    }

    countsPercentages () {
        let firstNumber = ''
        let seconsdNumber = ''
        let searchNumbers = this.action.split('')
        for (let i = 0; i < searchNumbers.length; i++) {
            if (searchNumbers[i] === '-' || searchNumbers[i] === '+') {
                firstNumber = this.action.substring(0, i)
                seconsdNumber = this.action.substring(i + 1, searchNumbers.length)
                this.action = this.action.substring(0, i + 1)
            }
        }
        this.action = this.action + ((parseInt(firstNumber) / 100) * parseInt(seconsdNumber))
    }

    deletesAValue () {
        this.action.length === 1 ? this.action = '' : this.action = this.action.substring(0, this.action.length - 1)
    }

    producesASolution () {
        try {
            this.result = eval(this.action)
        } catch {
            this.action = 'Недопустимое значение'
            setTimeout(() => {
                this.action = ''
            }, 1000)
        }
    }


    locksAndUnlocksTheDotButton () {
        for (let i = 0; i < this.action.length; i++) {
            if (this.action[i] === '.' && this.action[i + 1] === '.') {
                let buttonId = document.getElementById('17')
                buttonId && buttonId.setAttribute("disabled", "disabled")
                let actionArray = this.action.split('')
                actionArray.pop()
                this.action = actionArray.join('')
            } else if (this.action[i] === '+' && this.action[i + 1] === '.'
                || this.action[i] === '-' && this.action[i + 1] === '.'
                || this.action[i] === '*' && this.action[i + 1] === '.'
                || this.action[i] === '/' && this.action[i + 1] === '.') {
                let actionArray = this.action.split('')
                actionArray.pop()
                this.action = actionArray.join('') + '0.'

            } else {
                let buttonId = document.getElementById('17')
                buttonId && buttonId.removeAttribute("disabled")
            }
        }
    }

    locksAndUnlocksTheZeroButton (button: string) {
        for (let i = 0; i < this.action.length; i++) {
            if (this.action.length === 1 && this.action[i] === '0') {
                this.action = '0.'
            }
        }
    }

    addsValues (button: string) {
        this.action = this.action + button
        this.locksAndUnlocksTheDotButton()
        this.locksAndUnlocksTheZeroButton(button)

    }

    cleanUpValues () {
        this.result = 0
        this.action = ''
    }
}

const StoreContext = createContext<State>(new State())
const StoreProvider: FC<{ store: State }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)
const useState = () => {
    return useContext(StoreContext)
}
export {State, StoreProvider, useState}

