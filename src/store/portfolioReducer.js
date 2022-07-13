const defaultState = [
    {
        image: 'https://www.lifesavvy.com/p/uploads/2019/11/b506e46c.jpg?height=200p&trim=2,2,2,2',
        title: 'Where-Pizza',
        link: 'https://golub753.github.io/where-pizza/',
        code: 'https://github.com/golub753/where-pizza',
        description: 'This is app for delivery food (pizza, sushi, snacks, drinks). In this app I used to React (react-router-dom, styled-components, hooks) and Redux (redux-thunk). This is my first big app and I"m improving it and due to this I learn a lot of new things for practice.',
        tech_stack: ['react','redux','react-router-dom','firebase','styled-components']
    },
    {
        image: 'https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App.png',
        title: 'Weather-app',
        link: 'https://golub753.github.io/weather-app/',
        code: 'https://github.com/golub753/weather-app',
        description: 'This is a weather app. I used a functional approach to developingcomponents, connected a thirdparty API so that I could find the current weather forecast anywhere in the world.',
        tech_stack: ['react', 'react-transition-group', 'API']
    },
    {
        image: 'https://golub753.github.io/buh-one/images/image/main-screen.jpg',
        title: 'Buh-One',
        link: 'https://golub753.github.io/buh-one/',
        code: 'https://github.com/golub753/buh-one',
        description: 'This is a regular landing page using the React libraries. In this project, I managed to implement a parallax effect on the main screen and many sliders. There is also conditional rendering of components.',
        tech_stack: ['react', 'react-slick', 'slick-carousel', 'react-parallax']
    },
    {
        image: 'https://urologshakir.olimp03.ru/img/20989844.jpg',
        title: 'Shakir Urology',
        link: 'https://shakir-urology.ru/',
        code: '',
        description: 'My last commercial project on the current place of work. I used HTML5, SCSS, Gulp, Vanilla JS(ES 6+).',
        tech_stack: ['html','scss','javascript','gulp','php','wordpress']
    },
    {
        image: 'https://www.airon.by/uploads/master-plan/534be8cf7248883f409f2c6dc1b7e2ab.jpeg',
        title: 'Levada',
        link: 'https://levada-b-h.by/',
        code: '',
        description: 'This is my first commercial project. I used JavaScript with PHP programming language. This Webapp created on CMS Wordpress. In this project created very strong blocks (example map with salles appartements).',
        tech_stack: ['html','scss','php','gulp','wordpress','javascript']
    },
]

export const portfolioReducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}