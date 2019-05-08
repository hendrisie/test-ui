import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LandingPage } from './pages/landing';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));

serviceWorker.unregister();
