import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import store from './redux/store'

import MainApp from "./js/components/MainApp"

ReactDOM.render(<Provider store={store}> <MainApp /> </Provider>,document.getElementById("root"));