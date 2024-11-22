// ** Assets
import formCheckBox from '../../assets/formCheckBox.svg'
import formCheckedBox from '../../assets/formCheckedBox.svg'
// ** Style
import style from '../../css/pages/auth/registration.module.css'
// ** Components
import Button from '../../components/ui/Button';
import AuthSwitch from '../../components/ui/AuthSwitch';
import PasswordInput from '../../components/ui/PasswordInput';
// ** Data
import { registrationFormInputs } from '../../data/registrationForm';
// ** Other
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { formValidation } from '../../validation';



// ** Interfaces
interface IRegistrationFormData{
    userName: string,
    userEmail: string,
    userPassword: string,
    userConfirmPassword: string
}





export default function Registration() {
    // ** Defaults
    const defaultRegistrationFormData:IRegistrationFormData = {
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
        terms: ''
    }
    const navigate = useNavigate();




    // ** States 
    const [registrationFormData,setRegistrationFormData] = useState<IRegistrationFormData>(defaultRegistrationFormData);
    const [errorMsgs,setErrorMsgs] = useState(defaultErrorMsgs);
    const [hasAcceptedTerms,setHasAcceptedTerms] = useState<boolean>(false);





    // ** Handlers
    const changeInputValueHandler = (e:React.ChangeEvent<HTMLInputElement>,name:string)=>{
        setRegistrationFormData((preValues)=>({
            ...preValues,
            [name] : e.target.value
        }))
        setErrorMsgs((preValues)=>({
            ...preValues,
            [name] : ''
        }))
    }
    const checkBoxToggleHandler = ()=>{
        setHasAcceptedTerms(!hasAcceptedTerms)
        setErrorMsgs((preValues)=>({
            ...preValues,
            terms: ''
        }))
    };
    const submitFormHandler = ()=>{
        const {userName,userEmail,userPassword,userConfirmPassword} = registrationFormData;
        const errors = formValidation({ userName, userEmail, userPassword, userConfirmPassword, hasAcceptedTerms });
        const isValid = Object.values(errors).every(error => error === '');
        if(isValid)
        {
            navigate('/confirm-email')
        }
        else
        {
            setErrorMsgs(errors);
        }
    }




    // ** Renders
    const registrationFormRender = registrationFormInputs.map((formInput)=>
            (formInput.type !== 'password' ?
                <div className={style.form_input} key={formInput.id}>
                    <label htmlFor={formInput.id}>
                        <img src={formInput.icon.src} alt={formInput.icon.alt} />
                    </label>
                    <input type={formInput.type} name={formInput.name} id={formInput.id} placeholder={formInput.placeholder} onChange={(e)=>{changeInputValueHandler(e,formInput.name)}}/>
                    <span>{errorMsgs[formInput.name]}</span>
                </div>
                :
                <PasswordInput key={formInput.id} id={formInput.id} icon={{src: formInput.icon.src,alt: formInput.icon.alt}} type={formInput.type} name={formInput.name} placeholder={formInput.placeholder} error={errorMsgs[formInput.name]} onChange={(e)=>{changeInputValueHandler(e,formInput.name)}}/>
            )
    )





    return (
        <>
            <div className={style.registration_container}>
                <form>
                    {registrationFormRender}
                    <div className={style.form_input}>
                        <label htmlFor="termAndPrivacy">
                            <img src={hasAcceptedTerms? formCheckedBox : formCheckBox} alt="Form check box icon" onClick={checkBoxToggleHandler}/>
                        </label>
                        <p>I have read and agree with <Link to=''>Terms of Service</Link> and our <Link to=''>Privacy Polices</Link></p>
                        <span>{errorMsgs.terms}</span>
                    </div>
                </form>
                <div className={style.registration_btns}>
                    <Button title='Sign UP' uniqe={true} onClick={submitFormHandler}/>
                    <Button title='Sign up with Google' uniqe={false}/>
                </div>
                <AuthSwitch toLogin={true}/>
            </div>
        </>
    )
}
