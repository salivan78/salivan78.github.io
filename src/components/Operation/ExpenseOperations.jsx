import React from "react";
import btn from "../utils/Button.module.css";

const ExpenseOperations = () => {

    function operationHandler(e) {
        return alert(e);
    }

    return (
        <div className={btn.button_expense}>
            <div onClick={(e) => operationHandler('СО/ОКП')}>
                СО/ОКП
            </div>
            <div onClick={(e) => operationHandler('СО/ОХП')}>
                СО/ОХП
            </div>
            <div onClick={(e) => operationHandler('СО/ОПС')}>
                СО/ОПС
            </div>
            <div onClick={(e) => operationHandler('СО/ОДП')}>
                СО/ОДП
            </div>
            <div onClick={(e) => operationHandler('СО/ОПФ')}>
                СО/ОПФ
            </div>
        </div>
    )
}

export default ExpenseOperations