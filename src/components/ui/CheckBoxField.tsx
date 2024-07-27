import { useState } from 'react'
import checkBox from '../../assets/CheckBox.png'
import doneCheckBox from '../../assets/DoneCheckBox.png'



export default function CheckBoxField() {
    // ** States
    const [checkBoxState,setCheckBoxState] = useState<boolean>(false);





    // ** Handlers
    const handleCheckBoxState = ()=> setCheckBoxState(!checkBoxState);


    return (
        <>
            <label htmlFor="">
                <img src={checkBoxState ? doneCheckBox : checkBox} alt="" onClick={handleCheckBoxState}/>
            </label>
            <div>
                <p>I have read and agree with <span>Terms of Service</span> and our <span>Privacy Polices</span></p>
                <span></span>
            </div>
        </>
    )
}
