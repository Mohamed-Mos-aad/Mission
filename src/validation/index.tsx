import { IRegisterVali } from "../interfaces";

const minLenght = 10;
const maxLenght = 20;


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




export default function registrationValidation({userName,userEmail,userPassword,passwordConfirm}:IRegisterVali) {
    // ** States
    const errorMsgs:IRegisterVali = {
        userName: '',
        userEmail: '',
        userPassword: '',
        passwordConfirm: ''
    }






    if(!userName.trim() || userName.length < minLenght || userName.length > maxLenght)
    {
        errorMsgs.userName = `Username must be ${minLenght} - ${maxLenght} characters.`
    }

    if(!emailRegex.test(userEmail))
    {
        errorMsgs.userEmail = 'Valid email address.'
    }

    if(!userPassword.trim() || userPassword.length < minLenght || userPassword.length > maxLenght)
    {
        errorMsgs.userPassword = `Password must be ${minLenght} - ${maxLenght} characters.`
    }

    if(passwordConfirm !== userPassword)
    {
        errorMsgs.passwordConfirm = 'Passwords do not match.'
    }


    return errorMsgs;
}
