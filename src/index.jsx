/*
@startuml

!include ./pages/landing/LandingPage.jsx

index o-- LandingPage

class LandingPage << (C,red) Component>>{

}

@enduml

@startuml

actor User
boundary UI_ConvertForm
boundary UI_Result
control Redux_Store

User -> UI_ConvertForm : submitForm (on 'Enter')
activate UI_ConvertForm
UI_ConvertForm -> Redux_Store : dispatch action.submitTotal(total)
activate Redux_Store
Redux_Store -> Redux_Store : update redux store (result, leftover)
Redux_Store -> UI_Result : notify state update (result, leftover)
deactivate Redux_Store
activate UI_Result
UI_Result -> UI_Result : render props in dom
UI_Result -> User : show updated view in table
deactivate UI_Result
deactivate UI_ConvertForm

@enduml

 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import { LandingPage } from './pages/landing';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route path="/" component={LandingPage} />
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
