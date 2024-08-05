import { useContext, useEffect, useState } from 'react';
import logo from '../assets/ConfirmCodeIcon.png'
import style from '../css/pages/confirmEmail.module.css'
import SuccessConfirmEmail from './../components/ui/SuccessConfirmEmail';
import emailjs from '@emailjs/browser';
import { signUpWithEmailPassword } from '../firebase/auth';
import { DataContext } from '../store/index';
import { useNavigate } from 'react-router-dom';




// ** Interface
interface ITime
{
    minutes: number,
    seconds: number
}





export default function ConfirmEmail() {
    // ** Context
    const context = useContext(DataContext);
    const userData = context?.userData;






    // ** States
    const [successConfirm,setSuccessConfirm] = useState<boolean>(false);
    const [confirmCode,setConfirmCode] = useState<string>('');
    const [time,setTime] = useState<ITime>({minutes: 2,seconds:0});
    const [codeValue, setCodeValue] = useState<string>('');
    const navigate = useNavigate();





    // ** Intervales
    let intervalTimer: NodeJS.Timeout;





    // ** Handlers
    const handleGenerateConfirmCode = ()=>{
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        setConfirmCode(code);
        return code;
    }

    const handleTimer = ()=>{
        setTime((prevTime) => {
            let { minutes, seconds } = prevTime;
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(intervalTimer);
                const sendBtn = document.getElementById('sendBtn') as HTMLElement | null;
                sendBtn?.addEventListener('click', handleSentCode);
                if(sendBtn) {
                    sendBtn.style.cursor = 'pointer';
                }
                return { minutes: 2, seconds: 0 };
            }
            return { minutes, seconds };
        });
    }

    const handleInputCode = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const code = event.target.value;
        const wrongMsg = document.getElementById('wrongMsg');
        if (code.length <= 4 && /^\d*$/.test(code)) {
            setCodeValue(code);
        }

        if(code.length === 4)
        {
            if(code  === confirmCode)
            {
                setSuccessConfirm(true);
                if(userData)
                {
                    signUpWithEmailPassword(userData.userName,userData.userEmail,userData.userPassword);
                }
            }
            else
            {
                if(wrongMsg)
                {
                    wrongMsg.style.opacity = '1';
                }
            }
        }
    }

    const handleSentCode = ()=>{
        intervalTimer = setInterval(()=>{handleTimer()},1000);

        const code = handleGenerateConfirmCode();

        const sendBtn = document.getElementById('sendBtn');
        if(sendBtn)
        {
            sendBtn.removeEventListener('click',handleSentCode);
            sendBtn.innerHTML = 'resend';
            sendBtn.style.cursor =  'not-allowed';
        }

        if (userData) {
            sendEmail(userData.userEmail, code);
        }
    }



    // ** useEffect
    useEffect(()=>{
        if(!userData|| userData.userEmail === '')
        {
            navigate('/Mission');
        }
        const sendBtn = document.getElementById('sendBtn');
        sendBtn?.addEventListener('click', handleSentCode);
    })





    // ** EmailJs
    const sendEmail = (email: string, code: string) => {
        emailjs.send('service_e75s08c', 'template_jsraclg', {
            user_email: email,
            message: code
        }, '3PaUw5fPoj59Hzt83');
    };






    return (
        <>
            <div className={style.confirmPageContainer}>
                {successConfirm ?
                    <SuccessConfirmEmail/>
                :
                    <div className={style.codeContainer}>
                        <div className={style.logo}>
                            <img src={logo} alt="Confirm code logo" />
                        </div>
                        <div className={style.code}>
                            <input type="text" value={codeValue} onChange={handleInputCode}/>
                            <h2 id='wrongMsg'>Wrong Code</h2>
                        </div>
                        <div className={style.footerContainer}>
                            <div className={style.timer}>
                                {time.minutes > 9 ? time.minutes : `0${time.minutes}`} : {time.seconds > 9 ? time.seconds : `0${time.seconds}`}    
                            </div>
                            <button id='sendBtn'>Send</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
