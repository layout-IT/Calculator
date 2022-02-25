import s from './Display.module.scss'
import {observer} from 'mobx-react-lite'
import {useState} from "../../store/state";

export const Display = observer(() => {
    const store = useState()
    return <div className={s.wrapper}>
        <div className={s.action}>{store.action}</div>
        <div className={s.resault}>{store.result}</div>
    </div>
})