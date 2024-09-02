import userNameIcon from '../../assets/UserNameIcon.png'
import userEmailIcon from '../../assets/UserEmailIcon.png'
import userPasswordIcon from '../../assets/UserPasswordIcon.png'
import unCheckedBox from '../../assets/UnCheckedBox.png'
import style from '../../style/components/registration.module.css'

export default function Registration() {
    return (
        <>
            <div className={style.registration_container}>
                <form>
                    <div>
                        <label htmlFor="userName">
                            <img src={userNameIcon} alt="user name icon" />
                        </label>
                        <input type="text" name='userName' id='userName' placeholder='Username'/>
                        <span className={style.validation_error}>Username must be between 3 and 20 characters.</span>
                    </div>
                    <div>
                        <label htmlFor="userEmail">
                            <img src={userEmailIcon} alt="user name icon" />
                        </label>
                        <input type="email" name='userEmail' id='userEmail' placeholder='Email'/>
                        <span className={style.validation_error}>it must ended with  Ex : @gmail.com</span>
                    </div>
                    <div>
                        <label htmlFor="userPassword">
                            <img src={userPasswordIcon} alt="user name icon" />
                        </label>
                        <input type="password" name='userPassword' id='userPassword' placeholder='Password'/>
                        <span className={style.validation_error}>Password must be between 3 and 20 characters.</span>
                    </div>
                    <div>
                        <label htmlFor="userConfirmPassword">
                            <img src={userPasswordIcon} alt="user name icon" />
                        </label>
                        <input type="password" name='userConfirmPassword' id='userConfirmPassword' placeholder='Confirm Password'/>
                        <span className={style.validation_error}>Passwords do not match.</span>
                    </div>
                    <div>
                        <label htmlFor="termsAndPolices">
                            <img src={unCheckedBox} alt="user name icon" />
                        </label>
                        <p id='termsAndPolices'>
                            I have read and agree with <span>Terms of Service</span> and our <span>Privacy Polices</span>
                        </p>
                        <span className={style.validation_error}>You must agree to the Terms of Service and Privacy Policies.</span>
                    </div>
                </form>
                <div className={style.btns_container}>
                    <button>sign UP</button>
                    <button>Sign up with Google</button>
                </div>
                <div className={style.switch_component}>
                    <p>If you already have an account. <span>Log in</span></p>
                </div>
            </div>
        </>
    )
}
