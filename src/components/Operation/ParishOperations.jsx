import React from "react";
import btn from "../utils/Button.module.css";

const ParishOperations = () => {

    function operationHandler(e) {
        return alert(e);
    }

    return (
        <div className={btn.button_parish}>
            <div onClick={(e) => operationHandler('ОКП/СО')}>
                ОКП/СО
            </div>
            <div onClick={(e) => operationHandler('ОХП/СО')}>
                ОХП/СО
            </div>
            <div onClick={(e) => operationHandler('ОПС/СО')}>
                ОПС/СО
            </div>
            <div onClick={(e) => operationHandler('ОДП/СО')}>
                ОДП/СО
            </div>
            <div onClick={(e) => operationHandler('ОПФ/СО')}>
                ОПФ/СО
            </div>
        </div>
    )
}

export default ParishOperations