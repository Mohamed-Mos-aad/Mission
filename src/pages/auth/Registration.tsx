import userNameInputIcon from '../../assets/userNameInputIcon.svg'
import userEmailInputIcon from '../../assets/userEmailInputIcon.svg'
import userPasswordInputIcon from '../../assets/userPasswordInputIcon.svg'
import userCheckBoxInputIcon from '../../assets/userCheckBoxInputIcon.svg'

import style from '../../style/pages/auth/registration.module.css'





export default function Registration() {
    return (
        <>
            <div className={style.registration_container}>
                <form>
                    <div>
                        <label htmlFor="userName">
                            <img src={userNameInputIcon} alt="User Name Input Icon" />
                        </label>
                        <input type="text" name="userName" id="userName"  placeholder='Username'/>
                        <span></span>
                    </div>
                    
                    <div>
                        <label htmlFor="userEmail">
                            <img src={userEmailInputIcon} alt="User Email Input Icon" />
                        </label>
                        <input type="text" name="userEmail" id="userEmail"  placeholder='Email'/>
                        <span></span>
                    </div>
                    <div>
                        <label htmlFor="userPassword">
                            <img src={userPasswordInputIcon} alt="User Password Input Icon" />
                        </label>
                        <input type="text" name="userPassword" id="userPassword"  placeholder='Password'/>
                        <span></span>
                    </div>
                    <div>
                        <label htmlFor="userConfirmPassword">
                            <img src={userPasswordInputIcon} alt="User Confirm Password Input Icon" />
                        </label>
                        <input type="text" name="userConfirmPassword" id="userConfirmPassword"  placeholder='Confirm Password'/>
                        <span></span>
                    </div>
                    <div>
                        <label htmlFor="userCheckBox">
                            <img src={userCheckBoxInputIcon} alt="User Confirm Password Input Icon" />
                        </label>
                        <p>I have read and agree with <a href="">Terms of Service</a> and our <a href="">Privacy Polices</a></p>
                        <span></span>
                    </div>
                </form>
                <div className={style.form_btns}>
                    <button>Sign UP</button>
                    <button>Sign up with Google</button>
                </div>
                <div className={style.switch_auth}>
                    <p>If you already have an account. <a href="">Log in</a></p>
                </div>
            </div>
        </>
    )
}
