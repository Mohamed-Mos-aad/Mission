import { useNavigate } from 'react-router-dom'
import style from '../../style/components/welcome.module.css'


export default function Welcome() {
    // ** States
    const navigate = useNavigate();





    // ** Handlers
    const registrationHandler = ()=>{navigate('/registration')};
    const loginHandler = ()=>{navigate('/login')};





    return (
        <>
            <div className={style.welcome_component}>
                <h2>
                    Welcome
                    <br />to Mission
                    <br />app
                </h2>
                <div className={style.welcome_btns}>
                    <button onClick={registrationHandler}>sign UP</button>
                    <button onClick={loginHandler}>Log in</button>
                </div>
            </div>
        </>
    )
}
