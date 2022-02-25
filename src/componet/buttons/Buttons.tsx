import s from './Buttons.module.scss'
import {useState} from "../../store/state";


export const Buttons = () => {
    const store = useState()
    const clickButton = (button: string) => {
        store.setsZeroIfTheFirstPointIs(button)
        if (button !== '=') {
            if (button !== "DEL") {
                if (button !== "AC") {
                    if (button !== "%") {
                        store.addsValues(button)
                    } else if (button === "%") {
                        store.countsPercentages()
                    }
                } else if (button === "AC") {
                    store.cleanUpValues()
                }
            } else if (button === "DEL") {
                store.deletesAValue()
            }
        } else if (button === '=') {
            store.producesASolution()
        }
    }

    return <div className={s.wrapper}>
        <div className={s.rowOfButtons}>
            {store.state.map(value =>
                <button key={value.id}
                        onClick={() => clickButton(value.button)}
                        id={value.id.toString()}
                        className={s.quarterWidthButton}>
                    {value.button}
                </button>)}
        </div>
    </div>
}