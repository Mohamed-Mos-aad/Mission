import { useNavigate } from 'react-router-dom'
import style from '../../style/pages/auth/welcome.module.css'





export default function Welcome() {
    // ** States
    const navigate = useNavigate();





    // ** Handlers
    const openSignUpPageHandler = ()=>{
        navigate('/registration')
    }
    const openLogInPageHandler = ()=>{
        navigate('/login')
    }





    return (
        <>
            <div className={style.welcome_conatiner}>
                    <p>
                        Welcome <br />
                        to Mission <br />
                        app
                    </p>
                    <div className={style.welcome_btns}>
                        <button onClick={openSignUpPageHandler}>Sign UP</button>
                        <button onClick={openLogInPageHandler}>Log In</button>
                    </div>
            </div>
        </>
    )
}
