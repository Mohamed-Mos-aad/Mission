import { Link } from 'react-router-dom'
import successLogo from '../../assets/SuccessProccess.png'
import style from '../../css/pages/confirmEmail.module.css'

export default function SuccessConfirmEmail() {
    return (
        <>
            <div className={style.successProccessContainer}>
                <div className={style.logo}>
                <img src={successLogo} alt="Success logo" />
                </div>
                <p>Your account has been Confirmed Successfully</p>
                <Link to='/'><button>Log in</button></Link>
            </div>
        </>
    )
}
