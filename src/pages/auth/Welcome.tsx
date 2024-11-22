import { useNavigate } from 'react-router-dom'
import style from '../../css/pages/auth/welcome.module.css'
import Button from '../../components/ui/Button';

export default function Welcome() {
    // ** Defaults
    const navigate = useNavigate();





    // ** Handlers
    const signUpPageHandler = ()=>{navigate('/registration')};
    const logInPageHandler = ()=>{navigate('/login')};

    return (
        <>
            <div className={style.welcome_container}>
                <div className={style.title}>
                    <h2>
                        Welcome <br />
                        to Mission <br />
                        app
                    </h2>
                </div>
                <div className={style.welcome_btns}>
                    <Button title='Sign UP' uniqe={true} onClick={signUpPageHandler}/>
                    <Button title='Log In' uniqe={false} onClick={logInPageHandler}/>
                </div>
            </div>
        </>
    )
}
