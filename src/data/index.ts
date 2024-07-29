import { IRegistrationForm } from "../interfaces";
import usernameIcon from '../assets/UserNameIcon.png'
import mailIcon from '../assets/MailIcon.png'
import passwordIcon from '../assets/PasswordIcon.png'

export const registrationFormInputs:IRegistrationForm[] = [
    {
        id: 'userName',
        icon: {
            iconSrc: usernameIcon,
            iconAlt: 'User name icon',
        },
        placeholder: 'User Name',
        type: 'text'
    },
    {
        id: 'userEmail',
        icon: {
            iconSrc: mailIcon,
            iconAlt: 'email icon',
        },
        placeholder: 'Email',
        type: 'email'
    },
    {
        id: 'userPassword',
        icon: {
            iconSrc: passwordIcon,
            iconAlt: 'Password icon',
        },
        placeholder: 'Password',
        type: 'password'
    },
    {
        id: 'passwordConfirm',
        icon: {
            iconSrc: passwordIcon,
            iconAlt: 'Password icon',
        },
        placeholder: 'Password Confirm',
        type: 'password'
    }
]