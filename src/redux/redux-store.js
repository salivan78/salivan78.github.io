import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    // listCertificate: listReducer,
    // listsCertificatePage: qualityCertificateListReducer,
    // user: userReducer,
    // files: fileReducer,
    // upload: uploadReducer,
    // app: appReducer,
    // dataChart: performChartReducer,
    // news: newsReducer,
    //form: formReducer,
});

const store = createStore(reducers, (applyMiddleware(thunk)
));

window.store = store;

export default store;