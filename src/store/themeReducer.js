const defaultState = {
    theme: JSON.parse(localStorage.getItem('themeDev')) ? JSON.parse(localStorage.getItem('themeDev')) : 'white' 
}

const SWITCH_THEME = 'SWITCH_THEME';

export const themeReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SWITCH_THEME:
            localStorage.setItem('themeDev', JSON.stringify(action.payload))
            return {...state, theme: action.payload}
        default:
            return state
    }
}

export const switchThemeAction = (payload) => ({type: SWITCH_THEME, payload});