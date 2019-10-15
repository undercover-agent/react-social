import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer
});

let store = createStore(reducers);

export default store;
