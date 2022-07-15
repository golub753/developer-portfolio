import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { headerReducer } from "./headerReducer";
import { themeReducer } from "./themeReducer";
import { techReducer } from "./techReducer";
import { portfolioReducer } from "./portfolioReducer";
import { experienceReducer } from './experienceReducer';

const root = combineReducers({
    links: headerReducer,
    networks: headerReducer,
    theme: themeReducer,
    tech: techReducer,
    projects: portfolioReducer,
    experience: experienceReducer
})


export const store = createStore(root, composeWithDevTools());