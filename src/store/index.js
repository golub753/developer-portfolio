import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { headerReducer } from "./headerReducer";

const root = combineReducers({
    links: headerReducer,
    networks: headerReducer
})


export const store = createStore(root, composeWithDevTools());