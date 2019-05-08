/*
@startuml

!include ../../features/convert/reducers.js

class formReducers << (R,green) Reducer>>{
}

class store << (S,green) Store>>{
    +convert: convert.reducers,
    +form: formReducers,
}

store o-- convert.reducers
store o-- formReducers




@enduml
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import {
  NAME,
  reducer
} from '../../features/convert';

const composeEnhancers = composeWithDevTools({});

const middleware = [];

export const rootReducer = combineReducers({
  [NAME]: reducer,
  form: formReducer,
});

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)));
  return store;
}
