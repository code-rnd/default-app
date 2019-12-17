import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./store";

import {DefaultContainer} from "./containers/DefaultContainer";

ReactDOM.render(
    <Provider store={store}>
        <DefaultContainer/>
    </Provider>,
    document.getElementById('root'));

