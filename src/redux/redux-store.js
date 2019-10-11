import { createStore } from "redux";

import { dialogsReducer } from "./dialog-reducer";
import { profileReducer } from "./profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer
});

let store = createStore();

export default store;
