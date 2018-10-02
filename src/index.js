import React from "react";
import {render} from "react-dom";
import App from "./components/AppContainer.js";
import store from './store';

render(<App store={store} />, document.getElementById('root'));
