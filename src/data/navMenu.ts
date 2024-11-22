// ** Assets
import taskPageIcon from '../assets/pages_icons/taskPageIcon.svg'
import calendarPageIcon from '../assets/pages_icons/calendarPageIcon.svg'
import searchPageIcon from '../assets/pages_icons/searchPageIcon.svg'
import habitPageIcon from '../assets/pages_icons/habitPageIcon.svg'
import matricesPageIcon from '../assets/pages_icons/matricesPageIcon.svg'
import pomodoroPageIcon from '../assets/pages_icons/pomodoroPageIcon.svg'
import controlPageIcon from '../assets/pages_icons/controlPageIcon.svg'
// ** Interfaces
import { INavMenu } from "../interfaces";

export const navBarData: INavMenu[] = [
    {
        id: '0',
        path: '/',
        icon: {
            src: taskPageIcon,
            alt: 'Tasks page icon'
        },
        name: 'Tasks'
    },
    {
        id: '1',
        path: '/calendar',
        icon: {
            src: calendarPageIcon,
            alt: 'Calendar page icon'
        },
        name: 'Calendar'
    },
    {
        id: '2',
        path: '/search',
        icon: {
            src: searchPageIcon,
            alt: 'Search page icon'
        },
        name: 'Search'
    },
    {
        id: '3',
        path: '/habit',
        icon: {
            src: habitPageIcon,
            alt: 'Habit page icon'
        },
        name: 'Habit'
    },
    {
        id: '4',
        path: '/matrices',
        icon: {
            src: matricesPageIcon,
            alt: 'Matrices page icon'
        },
        name: 'Matrices'
    },
    {
        id: '5',
        path: '/pomodoro',
        icon: {
            src: pomodoroPageIcon,
            alt: 'Pomodoro page icon'
        },
        name: 'Pomodoro'
    },
    {
        id: '6',
        path: '/control',
        icon: {
            src: controlPageIcon,
            alt: 'Control page icon'
        },
        name: 'Control'
    }
]