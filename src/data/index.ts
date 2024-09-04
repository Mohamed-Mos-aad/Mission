import { IFormInputs } from "../interfaces"
import userNameIcon from '../assets/UserNameIcon.png'
import userEmailIcon from '../assets/UserEmailIcon.png'
import userPasswordIcon from '../assets/UserPasswordIcon.png'

export const formInputs:IFormInputs[] = [
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