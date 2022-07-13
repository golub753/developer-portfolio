import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { headerReducer } from "./headerReducer";
import { themeReducer } from "./themeReducer";
import { techReducer } from "./techReducer";

const root = combineReducers({
    links: headerReducer,
    networks: headerReducer,
    theme: themeReducer,
    tech: techReducer
})


export const store = createStore(root, composeWithDevTools());