// ** Style
import style from '../../css/pages/auth/login.module.css'
// ** Components
import Button from '../../components/ui/Button';
import PasswordInput from '../../components/ui/PasswordInput';
import AuthSwitch from '../../components/ui/AuthSwitch';
// ** Assets
import formUserEmailIcon from '../../assets/formUserEmailIcon.svg'
import formUserPasswordIcon from '../../assets/formUserPasswordIcon.svg'
// ** Other
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';







// ** Interfaces
interface IRegistrationFormData{
    userEmail: string,
    userPassword: string
}





export default function LogIn() {
    // ** Defaults
    const defaultRegistrationFormData:IRegistrationFormData = {
        userEmail: '',
        userPassword: ''
    }





    // ** States 
    const [registrationFormData,setRegistrationFormData] = useState<IRegistrationFormData>(defaultRegistrationFormData);
    




    // ** Handlers
    const changeInputValueHandler = (e:React.ChangeEvent<HTMLInputElement>,name:string)=>{
        setRegistrationFormData((preValues)=>({
            ...preValues,
            [name] : e.target.value
        }))
    }





    // ** UseEffect
    useEffect(()=>{
        console.log(registrationFormData);
    },[registrationFormData])







    return (
        <>
            <div className={style.login_container}>
                <form>
                    <div className={style.form_input}>
                        <label htmlFor="userEmail">
                            <img src={formUserEmailIcon} alt="Form user email icon" />
                        </label>
                        <input type="email" name="userEmail" id="userEmail" placeholder="Email" onChange={(e)=>{changeInputValueHandler(e,'userEmail')}}/>
                        <span></span>
                    </div>
                    <div className={style.login_password}>
                        <PasswordInput id="userPassword" icon={{src: formUserPasswordIcon,alt: "Form user password icon"}} type="password" name="userPassword" placeholder="Password" error="" onChange={(e)=>{changeInputValueHandler(e,'userPassword')}}/>
                        <Link to='/'>Forget Password ?</Link>
                    </div>
                </form>
                <div className={style.login_btns}>
                    <Button title='Log in' uniqe={true}/>
                    <Button title='Log in with Google' uniqe={false}/>
                </div>
                <AuthSwitch toLogin={false}/>
            </div>
        </>
    )
}
