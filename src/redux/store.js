import {createStore,applyMiddleware,combineReducers} from 'redux'
const thunkMiddleware=require('redux-thunk').default

import listReducer from './features/listTeam/reducer'
import contactReducer from './features/contactCard/reducer'

const rootReducer=combineReducers(
    {
        list:listReducer,
        contact:contactReducer
    }
)

const store=createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store