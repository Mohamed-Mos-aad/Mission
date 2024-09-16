import unCheckedBox from '../../assets/UnCheckedBox.png'
import checkedBox from '../../assets/CheckedBox.png'
import passwordShowIcon from '../../assets/PasswordShowIcon.png'
import passwordHideIcon from '../../assets/PasswordHideIcon.png'

import style from '../../style/components/registration.module.css'
import { useState } from 'react'
import { formInputs } from '../../data'
import { useNavigate } from 'react-router-dom'
import { InputValidation } from '../../validation'
import { useAppContext } from '../../store'
import { signInWithGoogle } from '../../firebase/auth'




// ** Interfacecs
interface IPasswordInputs{
    password: boolean,
    confirmPassword: boolean
}
interface IFormData{
    userName: string;
    userEmail: string;
    userPassword: string;
    userConfirmPassword: string;
    termsAndPolicyReaded?: string
}





export default function Registration() {
    // ** Context
    const { setRegistrationData } = useAppContext();







    // ** Defaults Data
    const defaultFormData:IFormData = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: ''
    }
    const defaultErrorMsgs = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        termsAndPolicyReaded: ''
    }
    const navigate = useNavigate();





    
    // ** States
    const [passwordVisibility,setPasswordVisibility] = useState<IPasswordInputs>({
        password: false,
        confirmPassword: false
    })
    const [formData,setFormData]  = useState<IFormData>(defaultFormData);
    const [errorMsgs,setErrorMsgs]  = useState<IFormData>(defaultErrorMsgs);
    const [termsAndPolicyReaded,setTermsAndPolicyReaded] = useState<boolean>(false);





    // ** Handlers
    const passwordStateHandler = (name:keyof IPasswordInputs)=>{
        setPasswordVisibility(prevState => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    }

    const FormValueHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
        setErrorMsgs(errors => ({
            ...errors,
            [e.target.id]: '',
        }));
    }

    const submitHandler = ()=>{
        const errors = InputValidation({ ...formData, termsAndPolicyReaded });
        const hasErrorMsg = Object.values(errors).some(value => value !== '');
        if(hasErrorMsg)
        {
            setErrorMsgs(errors);
            return
        }

        setRegistrationData({
            userName: formData.userName,
            userEmail: formData.userEmail,
            userPassword: formData.userPassword
        });
        resetFormInputsValuesHandler();
        navigate('/confrim-email');
    }

    const resetFormInputsValuesHandler = ()=>{
        setFormData(defaultFormData);
        setTermsAndPolicyReaded(false);
    };

    const termAndPolicyReadHandler = ()=>{
        setTermsAndPolicyReaded(!termsAndPolicyReaded);
        setErrorMsgs(prevState => ({
            ...prevState,
            termsAndPolicyReaded: '',
        }));
    }

    const registrationWithGoogleHandler = ()=>{
        signInWithGoogle();
    }







    // ** Renders 
    const formInputsRender = formInputs.map(formInput => 
        <div key={formInput.id}>
            <label htmlFor={formInput.id}>
                <img src={formInput.img.src} alt={formInput.img.alt} />
            </label>
            {formInput.type === 'password' ?
                <>
                    <input type={passwordVisibility[formInput.name === "userPassword" ? 'password' : 'confirmPassword']? 'text' : formInput.type} name={formInput.name} id={formInput.id} placeholder={formInput.placeholder} value={formData[formInput.name]} onChange={(e)=>{FormValueHandler(e)}}/>
                    <span className={style.password_state}><img src={passwordVisibility[formInput.name === "userPassword" ? 'password' : 'confirmPassword']?  passwordHideIcon : passwordShowIcon} alt="Password state icon" onClick={()=>{passwordStateHandler(formInput.name === "userPassword" ? 'password' : 'confirmPassword')}}/></span>
                </>
                :
                <input type={formInput.type} name={formInput.name} id={formInput.id} placeholder={formInput.placeholder} value={formData[formInput.name]} onChange={(e)=>{FormValueHandler(e)}}/>
            }
            <span className={style.validation_error}>{errorMsgs[formInput.name]}</span>
        </div>
    )


    



    return (
        <>
            <div className={style.registration_container}>
                <form>
                    {formInputsRender}
                    <div>
                        <label htmlFor="termsAndPolices">
                            <img src={termsAndPolicyReaded? checkedBox : unCheckedBox} alt="checkbox icon" onClick={termAndPolicyReadHandler}/>
                        </label>
                        <p id='termsAndPolices'>
                            I have read and agree with <span>Terms of Service</span> and our <span>Privacy Polices</span>
                        </p>
                        <span className={style.validation_error}>{errorMsgs.termsAndPolicyReaded}</span>
                    </div>
                </form>
                <div className={style.btns_container}>
                    <button onClick={submitHandler}>sign UP</button>
                    <button onClick={registrationWithGoogleHandler}>Sign up with Google</button>
                </div>
                <div className={style.switch_component}>
                    <p>If you already have an account. <span onClick={()=>{navigate('/login')}}>Log in</span></p>
                </div>
            </div>
        </>
    )
}
