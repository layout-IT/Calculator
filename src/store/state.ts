import {makeAutoObservable} from "mobx";

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

    clickButton (button: string) {
        if (button !== '=') {
            if (button !== "DEL") {
                if (button !== "AC") {
                    if (button !== "%") {
                        this.action = this.action + button
                    } else if (button === "%") {
                        let firstNumber = ''
                        let seconsdNumber = ''
                        let searchNumbers = this.action.split('')
                        for (let i = 0; i < searchNumbers.length; i++) {
                            if (searchNumbers[i] === '-') {
                                firstNumber = this.action.substring(0, i)
                                seconsdNumber = this.action.substring(i + 1, searchNumbers.length)
                                this.action = this.action.substring(0, i + 1)
                            }
                        }
                        this.action = this.action + ((parseInt(firstNumber) / 100) * parseInt(seconsdNumber))
                    }
                } else if (button === "AC") {
                    this.result = 0
                    this.action = ''
                }
            } else if (button === "DEL") {
                this.action.length === 1 ? this.action = '' : this.action = this.action.substring(0, this.action.length - 1)
            }
        } else if (button === '=') {
            try {
                this.result = eval(this.action)
                // this.action = ''
            } catch {
                this.action = 'Недопустимое значение'
                setTimeout(() => {
                    this.action = ''
                }, 1000)
            }
        }
    }
}

export default new State()