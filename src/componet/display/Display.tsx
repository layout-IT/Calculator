import s from './Display.module.scss'
import state from '../../store/state'
import {observer} from 'mobx-react-lite'

export const Display = observer(() => {
    return <div className={s.wrapper}>
        <div className={s.action}>{state.action}</div>
        <div className={s.resault}>{state.result}</div>
    </div>
})