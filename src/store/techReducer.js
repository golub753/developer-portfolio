const defaultState = [
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/html.svg',
        alt: 'html'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/css.svg',
        alt: 'css'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/javascript.svg',
        alt: 'javascript'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/typescript.svg',
        alt: 'typescript'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/react.svg',
        alt: 'react'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/redux.svg',
        alt: 'redux'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/graphql.svg',
        alt: 'graphql'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/sass.svg',
        alt: 'sass'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/git.svg',
        alt: 'git'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/vscode.svg',
        alt: 'vscode'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/github_logo.svg',
        alt: 'github_logo'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/firebase.svg',
        alt: 'firebase'
    },
    {
        icon: 'https://golub753.github.io/developer-portfolio/images/icons/webpack.svg',
        alt: 'webpack'
    }
]

export const techReducer = (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}