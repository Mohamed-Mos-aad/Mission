import showPassword from '../../assets/ShowPassword.png'
import hidePassword from '../../assets/HidePassword.png'
import { useState } from 'react'

interface IPassword{
    placeholder:string,
    id: string
}

export default function PasswordField({id,placeholder}:IPassword) {
    // ** States
    const [passwordState ,setPasswordState] = useState(false)





    // ** Handlers
    const handlePasswordState = ()=> setPasswordState(!passwordState);




    return (
        <>
            <img src={passwordState ? showPassword : hidePassword} alt="" onClick={handlePasswordState}/>
            <input type={passwordState ? 'text' : 'password'} placeholder={placeholder} id={id}/>
        </>
    )
}
