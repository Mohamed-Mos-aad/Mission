import style from '../../style/components/login.module.css'
import { useNavigate } from 'react-router-dom';




import InputPassword from '../ui/InputPassword';
import { useState } from 'react';
import { loginFormInputs } from '../../data';
import { loginWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth';




// ** InterFaces
interface ILoginForm{
    userEmail: string,
    userPassword: string
}
export default function LogIn() {
    // ** Defaults Data
    const navigate = useNavigate();
    const defaultFormData:ILoginForm ={
        userEmail: '',
        userPassword: ''
    }





    // ** States
    const [loginData,setLoginData] = useState<ILoginForm>(defaultFormData);





    // ** Handlers
    const FormValueHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
        setLoginData((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    const loginWithGoogleHandler = ()=>{
        signInWithGoogle();
    }
    const loginWithEmailAndPasswordHandler = ()=>{
        loginWithEmailAndPassword(loginData.userEmail,loginData.userPassword);
    }




    // ** Renders
    const loginFormRender = loginFormInputs.map((formInput)=>(
        <div key={formInput.id}>
            <label htmlFor={formInput.id}>
                <img src={formInput.img.src} alt={formInput.img.alt}/>
            </label>
            {formInput.type === 'email'? 
                <input type={formInput.type} id={formInput.id} name={formInput.name} placeholder={formInput.placeholder} value={loginData[formInput.name]} onChange={(e)=>{FormValueHandler(e)}}/>
            :
                <InputPassword type={formInput.type} id={formInput.id} name={formInput.name} placeholder={formInput.placeholder} value={loginData[formInput.name]} onChange={(e)=>{FormValueHandler(e)}}/>
            }
            <span className={style.validation_error}></span>
        </div>
    ))
    return (
        <>
            <div className={style.login_container}>
                <form>
                    {loginFormRender}
                    <h6 onClick={()=>{navigate('/')}}>Forget Password ?</h6>
                </form>
                <div className={style.btns_container}>
                    <button onClick={loginWithEmailAndPasswordHandler}>Log in</button>
                    <button onClick={loginWithGoogleHandler}>Log in with Google</button>
                </div>
                <div className={style.switch_component}>
                    <p>If you already don't have an account. <span onClick={()=>{navigate('/registration')}}>Sign up</span></p>
                </div>
            </div>
        </>
    )
}
