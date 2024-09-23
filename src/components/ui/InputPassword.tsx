import style from '../../style/components/ui/inputPassword.module.css'
import passwordShowIcon from '../../assets/PasswordShowIcon.png'
import passwordHideIcon from '../../assets/PasswordHideIcon.png'
import { useState } from 'react'




// ** Interfaces
interface IInputData{
    id: string,
    type: string,
    name: 'userEmail' |'userPassword',
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}





export default function InputPassword({id,name,placeholder,type,value,onChange}:IInputData) {
    // ** States
    const [passwordHidden,setPasswordHidden] = useState(true);





    // ** Handlers
    const changePasswordStateHandler = ()=>{
        setPasswordHidden(!passwordHidden);
    }





    return (
        <>
            <div className={style.inputPassword} >
                <input type={passwordHidden? type : 'text'} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange}/>
                <span className={style.password_state}><img src={passwordHidden? passwordShowIcon : passwordHideIcon} alt="Password state icon" onClick={changePasswordStateHandler}/></span>
            </div>
        </>
    )
}
