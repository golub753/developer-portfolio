const defaultState = {
    work: [
        {
            job_title: 'Technician-programmer',
            company: 'AskerWEB',
            location: 'Belarus',
            employment: 'Full Time',
            dates: '01 Jan 2020 - 11 Jul 2022'
        },
    ],
    education: [
        {
            specialization: 'Information technology software',
            school: 'Gomel Trade and Economic College "Belkoopsoyuz"',
            employment: 'Full Time',
            dates: '01 Sep 2016 - 01 Jul 2019'
        }
    ],
    courses: [
        {
            specialization: 'English A2+',
            school: '2English',
            employment: 'Part Time',
            dates: '01 Sep 2021 - 15 Jan 2022'
        },
        {
            specialization: 'JavaScript 20.0',
            school: 'Glo Academy',
            employment: 'Part Time',
            dates: '30 Oct 2021 - 10 Jan 2022'
        },
        {
            specialization: 'Web-start 11.0',
            school: 'Glo Academy',
            employment: 'Part Time',
            dates: '15 Aug 2020 - 01 Nov 2020'
        },
    ]
}

export const experienceReducer = (state = defaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}