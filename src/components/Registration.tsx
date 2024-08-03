import style from '../css/components/registration.module.css'
import { registrationFormInputs } from '../data'
import checkBox from '../assets/CheckBox.png'
import doneCheckBox from '../assets/DoneCheckBox.png'
import showPassword from '../assets/ShowPassword.png'
import hidePassword from '../assets/HidePassword.png'
import { useState } from 'react'
import { IRegisterVali, IUserData } from '../interfaces'
import registrationValidation from '../validation'
import { signUpWithGoogle, signUpWithEmailPassword } from '../firebase/auth'




export default function Registration() {
    // ** Defaults Data
    const defaultUserData = {
        userName: '',
        userEmail: '',
        userPassword: '',
        passwordConfirm: ''
    }





    // ** States
    const [checkBoxState,setCheckBoxState] = useState<boolean>(false);
    const [passwordStates, setPasswordStates] = useState<{ [key: string]: boolean }>({
        password: false,
        passwordConfirm: false
    });
    const[user,setUser] = useState<IUserData>(defaultUserData);
    const [errorMsgs,setErrorMsgs] = useState<IRegisterVali>(defaultUserData);
    const [errorCheckBox,setErrorCheckBox] = useState<boolean>(false);




    
    // ** Handlers
    const handleCheckBoxState = ()=> setCheckBoxState(!checkBoxState);

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


    const handleSignUpWithEmail = async ()=>{
        const errors = registrationValidation({...user});
        const hasErrors = Object.values(errors).every( error => error === '') && Object.values(errors).some( error => error === '');
        if(!hasErrors)
        {
            setErrorMsgs(errors);
            return;
        }

        if(checkBoxState)
        {
            setErrorCheckBox(!checkBoxState);
            const isSignedUp = await signUpWithEmailPassword(user.userName, user.userEmail, user.userPassword);
            if(!isSignedUp)
            {
                setErrorMsgs(prev => ({
                    ...prev,
                    userEmail: 'Email is already registered'
                }));
                return;
            }
            setUser(defaultUserData);
            setCheckBoxState(false);
        }
        else
        {
            setErrorCheckBox(!checkBoxState);
        }
    }


    const handleSignUpWithGoogle = ()=>{
        signUpWithGoogle();
    }





    // ** Renders
    const renderFormInputs = registrationFormInputs.map(item => (
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
            <div className={style.registrationContainer}>
                <form action="">
                    {renderFormInputs}
                    <div className={style.inputContainer}>
                    <label htmlFor="">
                        <img src={checkBoxState ? doneCheckBox : checkBox} alt="" onClick={handleCheckBoxState}/>
                    </label>
                    <div>
                        <p>I have read and agree with <span>Terms of Service</span> and our <span>Privacy Polices</span></p>
                        <span>{errorCheckBox && 'Read and agree the terms'}</span>
                    </div>
                    </div>
                </form>
                <div className={style.formBtns}>
                    <button onClick={handleSignUpWithEmail}>Sign up</button>
                    <button onClick={handleSignUpWithGoogle}>Sign up with Google</button>
                </div>
            </div>
        </>
    )
}