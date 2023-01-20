import React from 'react';
import s from './App.module.scss'
import './App.module.scss';
import { Display } from "./componet/display/Display";
import { Buttons } from "./componet/buttons/Buttons";

function App () {
    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <Display/>
                <Buttons/>
            </div>
        </div>
    );
}

export default App;

// чтобы деплоить на gh-pages вернуть homepage и gh-pages в package.json
