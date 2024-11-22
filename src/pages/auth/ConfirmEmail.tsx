// ** Components
import Button from './../../components/ui/Button';
// ** Assets
import confirmIcon from '../../assets/confirmIcon.svg'
import successIcon from '../../assets/successIcon.svg'
// ** Style
import style from '../../css/pages/auth/confirmEmail.module.css'
import { useEffect, useState } from 'react';





export default function ConfirmEmail() {
    // Defaults
    const defaultTimer = {minutes: 2, seconds: 0}




    // ** States
    const [userCodeInput,setUserCodeInput] = useState<string[]>(['','','','']);
    const [confirmCode,setConfirmCode] = useState<number>();
    const [isCodeValid, setIsCodeValid] = useState<boolean| null>(null);
    const [timer,setTimer] = useState(defaultTimer);
    const [timerActive, setTimerActive] = useState(false);






    // ** Handlers
    const changeInputsValueHanlder = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const inputIndex = Number(e.target.id);
        const inputValue = e.target.value
        if(/^-?\d+$/.test(inputValue))
        {
            const updatedCode = [...userCodeInput];
            updatedCode[inputIndex] = inputValue;
            setUserCodeInput(updatedCode);
    
            inputFocusChangeHandler(inputValue.length,inputIndex);
        }
        else
        {
            e.target.value = '';
        }
    }
    const inputFocusChangeHandler = (inputLength:number,inputIndex:number)=>{
        if (inputLength === 1 && inputIndex < 3)
        {
            document.getElementById(`${inputIndex + 1}`)?.focus();
        }
    }
    const sendCodeHandler = ()=>{
        setConfirmCode(Math.floor(Math.random() * 9000) + 1000);
        resetTimerHandler();
    }
    const resetTimerHandler = () => {
        setTimer({ minutes: 2, seconds: 0 });
        setTimerActive(true);
    };
    const timerStart = ()=>{
        if (timerActive)
        {
            const interval = setInterval(() =>{
                setTimer((prev) =>{
                    if (prev.seconds === 0)
                    {
                        if (prev.minutes === 0)
                        {
                            clearInterval(interval);
                            setTimerActive(false);
                            return prev;
                        }
                        return { minutes: prev.minutes - 1, seconds: 59 };
                    }
                    else
                    {
                        return { minutes: prev.minutes, seconds: prev.seconds - 1 };
                    }
                });
            }, 1000);
        }
    }






    // ** UseEffects
    useEffect(()=>{
        timerStart();
    },[timerActive])
    useEffect(()=>{
        console.log(confirmCode)
    },[confirmCode])

    useEffect(()=>{
        const isValid = !userCodeInput.includes('');
        if(isValid)
        {
            const enteredCode = userCodeInput.join('');
            setIsCodeValid(Number(enteredCode) === confirmCode);
        }
    },[userCodeInput]);
    
    useEffect(()=>{
        if(isCodeValid !== null)
        {
            if(!isCodeValid)
            {
                const inputsElements = document.querySelectorAll('input');
                for(let i = 0; i< inputsElements.length ; i++)
                {
                    inputsElements[i].style.borderBottomColor = 'red';
                }
            }
        }
    },[isCodeValid])





    return (
        <>
            {isCodeValid?
            <div className={style.confirm_container}>
                <div className={style.confirm_logo}>
                    <img className={style.successIcon} src={successIcon} alt="Success icon" />
                </div>
                <p>New  Password has been Confirmed Successfully</p>
                <div className={style.confirm_btns}>
                    <Button title="log in" uniqe={true} />
                </div>
            </div>
            :
            <div className={style.confirm_container}>
                <div className={style.confirm_logo}>
                    <img src={confirmIcon} alt="Confirm icon" />
                    <h2>Check Code</h2>
                </div>
                <div className={style.confirm_code}>
                    <div className={style.code_inputs}>
                        <input type="text" id='0' maxLength={1} onChange={(e)=>{changeInputsValueHanlder(e)}} aria-label='Code inpuit box'/>
                        <input type="text" id='1' maxLength={1} onChange={(e)=>{changeInputsValueHanlder(e)}} aria-label='Code inpuit box'/>
                        <input type="text" id='2' maxLength={1} onChange={(e)=>{changeInputsValueHanlder(e)}} aria-label='Code inpuit box'/>
                        <input type="text" id='3' maxLength={1} onChange={(e)=>{changeInputsValueHanlder(e)}} aria-label='Code inpuit box'/>
                    </div>
                    <div className={style.confirm_timer}>
                    0{timer.minutes}:{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
                    </div>
                </div>
                <div className={style.confirm_btns}>
                    <Button title="Send" uniqe={true} onClick={sendCodeHandler}/>
                </div>
            </div>
            }
        </>
    )
}
