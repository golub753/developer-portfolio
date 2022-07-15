const defaultState = [
    {
        icon: '../images/icons/html.svg',
        alt: 'html'
    },
    {
        icon: '../images/icons/css.svg',
        alt: 'css'
    },
    {
        icon: '../images/icons/javascript.svg',
        alt: 'javascript'
    },
    {
        icon: '../images/icons/typescript.svg',
        alt: 'typescript'
    },
    {
        icon: '../images/icons/react.svg',
        alt: 'react'
    },
    {
        icon: '../images/icons/redux.svg',
        alt: 'redux'
    },
    {
        icon: '../images/icons/graphql.svg',
        alt: 'graphql'
    },
    {
        icon: '../images/icons/sass.svg',
        alt: 'sass'
    },
    {
        icon: '../images/icons/git.svg',
        alt: 'git'
    },
    {
        icon: '../images/icons/vscode.svg',
        alt: 'vscode'
    },
    {
        icon: '../images/icons/github_logo.svg',
        alt: 'github_logo'
    },
    {
        icon: '../images/icons/firebase.svg',
        alt: 'firebase'
    },
    {
        icon: '../images/icons/webpack.svg',
        alt: 'webpack'
    }
]

export const techReducer = (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}