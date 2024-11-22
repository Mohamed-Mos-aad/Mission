// ** Components
import Button from './../../components/ui/Button';
// ** Assets
import forgetPasswordIcon from '../../assets/forgetPasswordIcon.svg'
import userEmailIcon from '../../assets/formUserEmailIcon.svg'
// ** Style
import style from '../../css/pages/auth/forgetPassword.module.css'
import { useNavigate } from 'react-router-dom';


export default function ForgetPassword() {
    // ** States
    const navigate = useNavigate();






    // ** Handlers
    const confirmEmailHandler = ()=>{
        navigate('/confirm-email');
    }

    




    return (
        <>
            <div className={style.forget_container}>
                <div className={style.forget_logo}>
                    <img className={style.forgetPasswordIcon} src={forgetPasswordIcon} alt="Forget password icon" />
                    <h2>Forget Password</h2>
                </div>
                <p>Please enter a valid email address and a code will be sent to enable you to change your password</p>
                <div className={style.form_input}>
                    <label htmlFor='userEmail'>
                        <img src={userEmailIcon} alt='User Email Icon' />
                    </label>
                    <input type='email' name='userEmail' id='userEmail' placeholder='Email'/>
                    <span></span>
                </div>
                <div className={style.confirm_btns}>
                    <Button title="Confirm" uniqe={true} onClick={confirmEmailHandler}/>
                </div>
            </div>
        </>
    )
}

