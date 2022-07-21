import {NavLink} from "react-router-dom";
import n from './Navbar.module.css'

export const Navbar = () => {

    return (
        <div className={n.navbar}>
            <div>
                <NavLink to='/operation'>
                    <div className={n.button_operation}>
                        Операции
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to='/information'>
                    <div className={n.button_information}>
                        Информация
                    </div>
                </NavLink>
            </div>
        </div>
    )
}