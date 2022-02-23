import {observer} from 'mobx-react-lite'
import s from './Buttons.module.scss'
import state from '../../store/state'

export const Buttons = observer(() => {
    return <div className={s.wrapper}>
        <div className={s.rowOfButtons}>
            {state.state.map(m =>
                <button key={m.id}
                        onClick={() => state.clickButton(m.button)}
                        className={s.quarterWidthButton}>
                    {m.button}
                </button>)}
        </div>
    </div>
})