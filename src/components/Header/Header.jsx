import {NavLink} from "react-router-dom";
import h from './Header.module.css'

const Header = () => {

    return <header className={h.header}>
        <div className={h.header_text}>
            Заголовок
        </div>
        <div>
            <button><NavLink to='/'>На главную</NavLink></button>
        </div>
        <div>
            <button><NavLink to='/'>↑ Вверх</NavLink></button>
        </div>
    </header>
}

export default Header