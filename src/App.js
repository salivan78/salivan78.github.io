import app from './App.module.css';
import Loader from "./components/utils/Loader";
import loader from './components/utils/Loader.module.css'
import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Operations from "./components/Operation/Operations";
import Information from "./components/Information/Information";
import Home from "./components/Home/Home";
import ParishOperations from "./components/Operation/ParishOperations";
import ExpenseOperations from "./components/Operation/ExpenseOperations";
import Header from "./components/Header/Header";

function App() {

    return (
        <div className={app.appWrapper}>
            <Header/>
            <Suspense fallback={<div className={loader.loader}><Loader/></div>}>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='operation' element={<Operations/>}>
                        <Route path='parish' element={<ParishOperations/>}/>
                        <Route path='expense' element={<ExpenseOperations/>}/>
                    </Route>
                    <Route path='information' element={<Information/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;