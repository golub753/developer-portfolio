const defaultState = {
    links: [
        {
            text: 'Home',
            link: '/developer-portfolio'
        },
        {
            text: 'About',
            link: '/developer-portfolio/about'
        },
        {
            text: 'Tech Stack',
            link: '/developer-portfolio/stack'
        },
        {
            text: 'Projects',
            link: '/developer-portfolio/projects'
        },
        {
            text: 'Contact',
            link: '/developer-portfolio/contact'
        }
    ],
    networks: [
        {
            img: 'https://golub753.github.io/developer-portfolio/images/icons/github.svg',
            link: 'https://github.com/golub753'
        },
        {
            img: 'https://golub753.github.io/developer-portfolio/images/icons/twitter.svg',
            link: 'https://twitter.com/glov1k_fusi'
        },
        {
            img: 'https://golub753.github.io/developer-portfolio/images/icons/linkedin.svg',
            link: 'https://www.linkedin.com/in/anton-holub'
        },
    ]
}

export const headerReducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}