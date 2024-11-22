import { IRegistrationFormInputs } from "../interfaces";
import formUserNameIcon from '../assets/formUserNameIcon.svg'
import formUserEmailIcon from '../assets/formUserEmailIcon.svg'
import formUserPasswordIcon from '../assets/formUserPasswordIcon.svg'

export const registrationFormInputs: IRegistrationFormInputs[] = 
[
    {
        id: "username",
        icon: {
            src: formUserNameIcon,
            alt: "Form user name icon"
        },
        name: "userName",
        placeholder: "Username",
        type: "text"
    },
    {
        id: "userEmail",
        icon: {
            src: formUserEmailIcon,
            alt: "Form user email icon"
        },
        name: "userEmail",
        placeholder: "Email",
        type: "email"
    },
    {
        id: "userPassword",
        icon: {
            src: formUserPasswordIcon,
            alt: "Form user password icon"
        },
        name: "userPassword",
        placeholder: "Password",
        type: "password"
    },
    {
        id: "userConfirmPassword",
        icon: {
            src: formUserPasswordIcon,
            alt: "Form user password confirm icon"
        },
        name: "userConfirmPassword",
        placeholder: "Confirm Password",
        type: "password"
    },
]