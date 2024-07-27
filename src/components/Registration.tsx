import style from '../css/components/registration.module.css'
import { registrationFormInputs } from '../data'
import CheckBoxField from './ui/CheckBoxField'
import PasswordField from './ui/PasswordField'

export default function Registration() {
    // ** States

    // ** Handlers





    // ** Renders
    const renderFormInputs = registrationFormInputs.map(item => (
        <div className={style.inputContainer} key={item.id}>
            <label htmlFor={item.id}>
                <img src={item.icon.iconSrc} alt={item.icon.iconSrc}/>
            </label>
            <div>
                {
                    item.type === 'password' ?
                    <PasswordField placeholder={item.placeholder} id={item.id}/>
                    :
                    <input type={item.type} placeholder={item.placeholder} id={item.id}/>
                }
                <span></span>
            </div>
        </div>
    ))





    return (
        <>
            <div className={style.registrationContainer}>
                <form action="">
                    {renderFormInputs}
                    <div className={style.inputContainer}>
                        <CheckBoxField/>
                    </div>
                </form>
                <div className={style.formBtns}>
                    <button>Sign up</button>
                    <button>Sign up with Google</button>
                </div>
            </div>
        </>
    )
}