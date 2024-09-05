import checkCodeLogo from '../../assets/CheckCode.png'
import style from '../../style/components/confirmEmail.module.css'




export default function ConfirmEmail() {
    return (
        <>
            <div className={style.confirm_email_container}>
                <div className={style.logo}>
                    <img src={checkCodeLogo} alt="Check code logo" />
                    <h2>Check Code</h2>
                </div>
                <div className={style.code}>
                    <div className={style.code_input}>
                        <input type="text" maxLength={1}/>
                        <input type="text" maxLength={1}/>
                        <input type="text" maxLength={1}/>
                        <input type="text" maxLength={1}/>
                    </div>
                    <div className={style.timer}>
                        01:55
                    </div>
                </div>
                <div className={style.btn_container}>
                    <button>Send</button>
                </div>
            </div>
        </>
    )
}
