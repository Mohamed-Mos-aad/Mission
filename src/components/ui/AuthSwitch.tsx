import { Link } from "react-router-dom";
import style from '../../css/components/ui/authSwith.module.css'
import { memo } from "react";




// ** Interfaces
interface IAuthSwitch{
    toLogin: boolean
}





function AuthSwitch({toLogin}:IAuthSwitch) {
    return (
        <>
            <div className={style.auth_switch}>
                { toLogin ?
                    <p>If you already have an account. <Link to='/login'>Log in</Link></p>
                    :
                    <p>If you don't have an account. <Link to='/registration'>Sign up</Link></p>
                }
            </div>  
        </>
    )
}


// Export with Memo 
export default memo(AuthSwitch);