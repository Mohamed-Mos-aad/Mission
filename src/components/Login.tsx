import { useState } from 'react';
import style from '../css/components/logIn.module.css'
import { logInFormInputs } from "../data";
import showPassword from '../assets/ShowPassword.png'
import hidePassword from '../assets/HidePassword.png'
import { IRegisterVali, IUserData } from '../interfaces';
import { logInWithEmailPassword, logInWithGoogle } from '../firebase/auth';





export default function Login() {
    // ** Defaults Data
    const defaultUserData = {
        userName: '',
        userEmail: '',
        userPassword: '',
        passwordConfirm: ''
    }
    
    
    
    
    // ** States
    const[user,setUser] = useState<IUserData>(defaultUserData);
    const [passwordStates, setPasswordStates] = useState<{ [key: string]: boolean }>({
        password: false,
        passwordConfirm: false
    });
    const [errorMsgs,setErrorMsgs] = useState<IRegisterVali>(defaultUserData);





    // ** Handlers
    const handlePasswordState = (field: string) => {
        setPasswordStates(prevStates => ({
            ...prevStates,
            [field]: !prevStates[field]
        }));
    };

    const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
        setErrorMsgs({
            ...errorMsgs,
            [name]: ''
        });
    }

    const handleLogInWithEmail = ()=>{
        if(user.userEmail !== '')
        {
            if(user.userPassword !== '')
            {
                logInWithEmailPassword(user.userEmail,user.userPassword);
            }
            else
            {
                setErrorMsgs({
                    ...errorMsgs,
                    userPassword: 'Wrong Paassword.'
                });
            }
        }
        else
        {
            setErrorMsgs({
                ...errorMsgs,
                userEmail: 'Sign up with that email first.'
            });
        }
    }







    // ** Renders
    const renderLogInForm = logInFormInputs.map(item => (
        <div className={style.inputContainer} key={item.id}>
            <label htmlFor={item.id}>
                <img src={item.icon.iconSrc} alt={item.icon.iconSrc}/>
            </label>
            <div>
                {
                    item.type === 'password' ?
                    <>
                            <img src={passwordStates[item.id] ? showPassword : hidePassword} alt="" onClick={() => handlePasswordState(item.id)}/>
                            <input type={passwordStates[item.id] ? 'text' : 'password'} name={item.id} placeholder={item.placeholder} value={user[item.id]} id={item.id} onChange={handleOnChange}/>
                    </>
                    :
                    <input type={item.type} placeholder={item.placeholder} value={user[item.id]} name={item.id} id={item.id} onChange={handleOnChange}/>
                }
                <span>{errorMsgs[item.id]}</span>
            </div>
        </div>
    ))




    return (
        <>
            <div className={style.loginContainer}>
                <form action="">
                    {renderLogInForm}
                </form>
                <div className={style.formBtns}>
                    <button onClick={handleLogInWithEmail}>Log In</button>
                    <button onClick={logInWithGoogle}>Log In with Google</button>
                </div>
            </div>
        </>
    )
}
