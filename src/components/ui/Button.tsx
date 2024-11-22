import style from '../../css/components/ui/button.module.css'



// ** Interface
interface IButton
{
    title: string,
    uniqe: boolean,
    onClick?: ()=> void
}

export default function Button({title,uniqe,onClick}:IButton) {
    return (
        <>
            <button className={`${style.customize_button} ${uniqe && style.uniqe_button}`} onClick={onClick}>{title}</button>
        </>
    )
}
