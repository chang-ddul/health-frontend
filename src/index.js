import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise"; // promise를 사용하기 위한 미들웨어
import { thunk } from "redux-thunk"; // 비동기를 사용하기 위한 미들웨어
import Reducer from "./redux/reducers/index";

// 원래 store는 객체밖에 못받기 때문에 promise와 function을 사용하기 위해 미들웨어를 사용한다.
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider
            store={createStoreWithMiddleware(
                Reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )}
        >
            <App />
        </Provider>
    </React.StrictMode>
);
