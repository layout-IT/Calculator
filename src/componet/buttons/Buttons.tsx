import {observer} from 'mobx-react-lite'
import s from './Buttons.module.scss'
import state from '../../store/state'
import {useRef} from "react";

export const Buttons = observer(() => {
    const buttonRef = useRef(null)

    return <div className={s.wrapper}>
        <div className={s.rowOfButtons}>
            {state.state.map(value =>
                <button key={value.id}
                        onClick={() => state.clickButton(value.button,value.id)}
                        id={value.id.toString()}
                        className={s.quarterWidthButton}>
                    {value.button}
                </button>)}
        </div>
    </div>
})