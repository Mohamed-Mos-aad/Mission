export interface IRegistrationForm{
    id: 'userName' | 'userEmail' | 'userPassword' | 'passwordConfirm',
    icon: {
        iconSrc: string,
        iconAlt: string
    },
    type: string,
    placeholder: string,
}


export interface IUserData{
    userName: string,
    userEmail: string,
    userPassword: string,
    passwordConfirm: string
}


export interface IRegisterVali{
    userName: string,
    userEmail: string,
    userPassword: string,
    passwordConfirm: string
}



export interface ILogInForm{
    id: 'userName' | 'userEmail' | 'userPassword' | 'passwordConfirm',
    icon: {
        iconSrc: string,
        iconAlt: string
    },
    type: string,
    placeholder: string,
}
