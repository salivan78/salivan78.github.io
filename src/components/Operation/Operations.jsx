import React from "react";
import o from './Operations.module.css'
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";
import button from '../utils/Button.module.css'

const Operations = () => {

    return (
        <div className={o.operation}>
            <div className={o.text}>ОПЕРАЦИИ</div>
            <div className={o.content}>
                <NavLink to='/operation/parish'>
                    <div className={button.button_entrance}>
                        Приход
                    </div>
                </NavLink>
                <NavLink to='/operation/expense'>
                    <div className={button.button_exit}>
                        Расход
                    </div>
                </NavLink>
            </div>
            <Outlet/>
        </div>
    )
}

export default Operations