import { useEffect, useRef, useState } from 'react';
import checkCodeLogo from '../../assets/CheckCode.png'
import successLogo from '../../assets/SuccessIcon.png'
import style from '../../style/components/confirmEmail.module.css'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../store';
import { registerWithEmailAndPassword } from '../../firebase/auth';





// **Interfaces
interface ITime{
    minutes: number,
    seconds: number
}





export default function ConfirmEmail() {
    // ** Context
    const { registrationData } = useAppContext();





    // ** Defaults value
    let currentMinutes = 2;
    let currentSeconds = 0;
    let timerInterval:NodeJS.Timeout;
    const navigate = useNavigate();




    // ** States
    const [time,setTime] = useState<ITime>({
        minutes: 2,
        seconds: 0
    })
    const [inputsValues, setInputsValues] = useState<string[]>(['', '', '', '']);
    const [userInputCode,setUserInputCode] = useState<string>('');
    const [codeWrong,setCodeWrong] = useState<boolean>(false);
    const [codeSended,setCodeSended] = useState<boolean>(false);
    const [confirmCode,setConfirmCode] = useState<number|null>(null)
    const [confirmEmailSuccess,setConfirmEmailSuccess] = useState<boolean>(false);



    
    // ** Ref
    const inputsRef = useRef<HTMLInputElement[]>([]);

    

    

    // ** Handlers
    const nextInputHandler = (e: React.FormEvent<HTMLInputElement>)=>{
        const target = e.target as HTMLInputElement;
        const index = Number(target.id);
        const isNumeric = /^[0-9]$/.test(target.value);
        setInputsValues((prev)=>{
            const updatedCode = [...prev]; 
            updatedCode[index] = target.value
            return updatedCode;
        })

        if(!isNumeric)
        {
            target.value = '';
        }

        if(index < 3 && target.value.length > 0)
        {
            const input = inputsRef.current[index+1];
            input.focus();
        }
    }
    
    const timerStartHandler = ()=>{
        if(currentSeconds === 0)
        {
            currentMinutes = currentMinutes - 1;
            currentSeconds = 59;

            setTime({
                minutes: currentMinutes,
                seconds: currentSeconds
            });
        }
        else
        {
            currentSeconds = currentSeconds -1;
            setTime({
                minutes: currentMinutes,
                seconds: currentSeconds
            });
        }

        if(currentMinutes === 0 && currentSeconds === 0)
        {
            clearInterval(timerInterval);
            currentMinutes = 2;
            currentSeconds = 0;
            setTime({
                minutes: currentMinutes,
                seconds: currentSeconds
            });
            const sendBtn = document.getElementById('sendBtn');
            if(sendBtn)
            {
                sendBtn.innerHTML = 'Resend';
                sendBtn.addEventListener('click',sendCodeHandler);
                sendBtn.style.cursor = 'pointer';
            }
            setCodeSended(false);
        }
    }

    const sendCodeHandler = ()=>{
        const sendBtn = document.getElementById('sendBtn');
        if(sendBtn)
        {
            sendBtn.removeEventListener('click',sendCodeHandler);
        }
        setCodeSended(true);
    };


    const verificationCode = Math.floor(1000 + Math.random() * 9000);

    const sendEmailHandler = ()=>{
        setConfirmCode(verificationCode);
        const serviceId = 'service_e75s08c';
        const templateId = 'template_jsraclg';
        const templateParams = {
            user_email: registrationData?.userEmail,
            user_name: registrationData?.userName,
            message: verificationCode,
        };
        const publicKey = '3PaUw5fPoj59Hzt83';

        emailjs.send(serviceId, templateId, templateParams , {publicKey});
    }






    // ** UseEffects
    useEffect(()=>{
        inputsRef.current = Array.from(document.querySelectorAll<HTMLInputElement>('input'));
        const sendBtn = document.getElementById('sendBtn');
        sendBtn?.addEventListener('click',sendCodeHandler);
    },[]);
    
    useEffect(()=>{
        if(codeSended)
        {
            timerInterval = setInterval(timerStartHandler, 1000);
            sendEmailHandler();
            const sendBtn = document.getElementById('sendBtn');
            if(sendBtn)
            {
                sendBtn.style.cursor = 'no-drop';
            }
        }
    },[codeSended]);

    useEffect(()=>{
        if (inputsValues.every(value => value !== ''))
        {
            const code = inputsValues.join('');
            setUserInputCode(code)
        }
    },[inputsValues]);

    useEffect(()=>{
        if (userInputCode !== '')
        {
            if(userInputCode !== confirmCode?.toString())
            {
                setCodeWrong(true);
            }
            else
            {
                setConfirmEmailSuccess(true);
                if(registrationData)
                {
                    registerWithEmailAndPassword(registrationData.userEmail,registrationData.userPassword,registrationData.userName);
                }
            }
        }
    },[userInputCode]);





    return (
        <>
            {confirmEmailSuccess?
                <div className={style.confirm_email_container}>
                    <div className={style.success_logo}>
                        <img src={successLogo} alt="Success logo" />
                        <h2>Email has been Confirmed Successfully</h2>
                    </div>
                    <div className={style.btn_container}>
                        <button onClick={()=>{navigate('/login')}}>Login</button>
                    </div>
                </div>
            :
                <div className={style.confirm_email_container}>                    
                    <div className={style.logo}>
                        <img src={checkCodeLogo} alt="Check code logo" />
                        <h2>Check Code</h2>
                    </div>
                    <div className={style.code}>
                        <div className={style.code_input}>
                            <input type="text" maxLength={1} id='0' onInput={(e)=>{nextInputHandler(e)}}/>
                            <input type="text" maxLength={1} id='1' onInput={(e)=>{nextInputHandler(e)}}/>
                            <input type="text" maxLength={1} id='2' onInput={(e)=>{nextInputHandler(e)}}/>
                            <input type="text" maxLength={1} id='3' onInput={(e)=>{nextInputHandler(e)}}/>
                        </div>
                        <div className={style.timer}>
                            0{time.minutes}:{time.seconds > 9 ? time.seconds : `0${time.seconds}`}
                        </div>
                        <div className={style.code_error}>
                            <h3>{codeWrong ? "Wrong code" : " "}</h3>
                        </div>
                    </div>
                    <div className={style.btn_container}>
                        <button id='sendBtn'>Send</button>
                    </div>
                </div>
            }
            
        </>
    )
}
