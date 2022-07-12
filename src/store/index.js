import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { headerReducer } from "./headerReducer";
import { themeReducer } from "./themeReducer";

const root = combineReducers({
    links: headerReducer,
    networks: headerReducer,
    theme: themeReducer
})


export const store = createStore(root, composeWithDevTools());