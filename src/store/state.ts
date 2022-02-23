import {makeAutoObservable} from "mobx";

class State {
    result = 0
    action = ''
    state = [
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

    constructor() {
        makeAutoObservable(this)
    }

    clickButton(button) {
        if (button !== '=') {
            if (button !== "DEL") {
                button !== "AC" ? this.action = this.action + button : (this.result = 0)
            } else if (button === "DEL") {
                this.action.length === 1 ? this.action = '' : this.action = this.action.substring(0, this.action.length - 1)
            }
        } else {
            try {
                this.result = eval(this.action)
                this.action = ''
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