import passwordShowIcon from '../../assets/passwordShowIcon.svg'
import passwordHideIcon from '../../assets/passwordHideIcon.svg'

import style from '../../css/components/ui/passwordInput.module.css'
import { useState } from 'react'




// ** Interfaces
interface IPasswordInput
{
    id: string,
    icon: {
        src: string,
        alt: string
    },
    type: string,
    name: string,
    placeholder: string,
    error: string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=> void
}






export default function PasswordInput({id,icon,type,name,placeholder,error,onChange}:IPasswordInput) {
    // ** States
    const [passwordHidden,setPasswordHidden] = useState<boolean>(true) ;






    // ** Handlers
    const passwordStateToggleHandler = ()=>{setPasswordHidden(!passwordHidden)};


    return (
        <>
            <div className={style.form_input}>
                <label htmlFor={id}>
                    <img src={icon.src} alt={icon.alt} />
                </label>
                <input type={passwordHidden? type : 'text'} name={name} id={id} placeholder={placeholder} onChange={onChange}/>
                <span>{error}</span>
                <div className={style.password_state}>
                    <img src={passwordHidden? passwordShowIcon : passwordHideIcon} alt={passwordHidden? "Password show icon" : "Password hide icon" } onClick={passwordStateToggleHandler}/>
                </div>
            </div>
        </>
    )
}
