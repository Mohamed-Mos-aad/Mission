import { IFormInputs, INavBarIcons, ILoginFormInputs } from "../interfaces"
import userNameIcon from '../assets/UserNameIcon.png'
import userEmailIcon from '../assets/UserEmailIcon.png'
import userPasswordIcon from '../assets/UserPasswordIcon.png'

export const registrationFormInputs:IFormInputs[] = [
    {
        id: 'userName',
        img: {
            src: userNameIcon,
            alt: 'user name icon'
        },
        type: 'text',
        name: 'userName',
        placeholder: 'Username'
    },
    {
        id: 'userEmail',
        img: {
            src: userEmailIcon,
            alt: 'user email icon'
        },
        type: 'email',
        name: 'userEmail',
        placeholder: 'Email'
    },
    {
        id: 'userPassword',
        img: {
            src: userPasswordIcon,
            alt: 'user password icon'
        },
        type: 'password',
        name: 'userPassword',
        placeholder: 'Password'
    },
    {
        id: 'userConfirmPassword',
        img: {
            src: userPasswordIcon,
            alt: 'user confirm password icon'
        },
        type: 'password',
        name: 'userConfirmPassword',
        placeholder: 'Confirm Password'
    }
]


export const loginFormInputs:ILoginFormInputs[] = [
    {
        id: 'userEmail',
        img: {
            src: userEmailIcon,
            alt: 'user email icon'
        },
        type: 'email',
        name: 'userEmail',
        placeholder: 'Email'
    },
    {
        id: 'userPassword',
        img: {
            src: userPasswordIcon,
            alt: 'user password icon'
        },
        type: 'password',
        name: 'userPassword',
        placeholder: 'Password'
    }
]





import TasksPageIcon from '../assets/TasksPageIcon.png'
import CalendarPageIcon from '../assets/CalendarPageIcon.png'
import SearchPageIcon from '../assets/SearchPageIcon.png'
import HabitePageIcon from '../assets/HabitePageIcon.png'
import MatricesPageIcon from '../assets/MatricesPageIcon.png'
import PomodoroPageIcon from '../assets/PomodoroPageIcon.png'
import ControlPageIcon from '../assets/ControlPageIcon.png'


export const NavBarData:INavBarIcons[] = [
    {
        id: '1',
        img: {
            src: TasksPageIcon,
            alt: 'Tasks page icon',
        },
        title: 'Tasks',
        path: '/u/tasks'
    },
    {
        id: '2',
        img: {
            src: CalendarPageIcon,
            alt: 'Calendar page icon',
        },
        title: 'Calendar',
        path: '/u/calendar'
    },
    {
        id: '3',
        img: {
            src: SearchPageIcon,
            alt: 'Search page icon',
        },
        title: 'Search',
        path: '/u/search'
    },
    {
        id: '4',
        img: {
            src: HabitePageIcon,
            alt: 'Habit page icon',
        },
        title: 'Habit',
        path: '/u/habit'
    },
    {
        id: '5',
        img: {
            src: MatricesPageIcon,
            alt: 'Matrices page icon',
        },
        title: 'Matrices',
        path: '/u/matrices'
    },
    {
        id: '6',
        img: {
            src: PomodoroPageIcon,
            alt: 'Pomodoro page icon',
        },
        title: 'Pomodoro',
        path: '/u/pomodoro'
    },
    {
        id: '7',
        img: {
            src: ControlPageIcon,
            alt: 'Control page icon',
        },
        title: 'Control',
        path: '/u/control'
    }
]