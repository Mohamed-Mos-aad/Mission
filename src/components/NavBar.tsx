import style from '../style/components/navBar.module.css'
import TasksPageIcon from '../assets/TasksPageIcon.png'
import { useState } from 'react'
import { NavBarData } from '../data';
import { useNavigate } from 'react-router-dom';





// ** Interfaces
interface IMainIcon{
    id: string
    img:{
        src: string,
        alt: string
    },
    title: string
}

export default function NavBar() {
    // ** Defaults
    const defaultMainIcon = {
        id: '1',
        img:{
            src:TasksPageIcon,
            alt: 'Tasks Page Icon'
        },
        title: 'Tasks'
    };
    const navigate = useNavigate();





    // ** States
    const [mainIcon,setMainIcon] = useState<IMainIcon>(defaultMainIcon);
    const [isOpen, setIsOpen] = useState<boolean>(false);





    // Handlers
    const toggleNavHandler = ()=>{
        setIsOpen(!isOpen);
    }
    const selectPageHandler = (e:React.MouseEvent<HTMLLIElement>)=>{
        const selectedPage = NavBarData.filter(item=> item.id === e.currentTarget.id)[0];
        setMainIcon({
            id: selectedPage.id,
            img:{
                src: selectedPage.img.src,
                alt: selectedPage.img.alt
            },
            title: selectedPage.title
        });
        toggleNavHandler();
        navigate(selectedPage.path);
    }




    

    // ** Renders
    const navBarMenuRender =  NavBarData.filter(item => item.id !== mainIcon.id).map((item) => (
        <li key={item.id} onClick={(e)=>{selectPageHandler(e)}} id={`${item.id}`}>
            <div className={style.icon}>
                <img src={item.img.src} alt={item.img.alt} />
            </div>
            <h2>{item.title}</h2>
        </li>
    ))






    return (
        <>
            <nav className={`${isOpen? style.open : ''}`}>
                <div className={style.current_page} onClick={toggleNavHandler}>
                    <div className={style.main_icon}>
                        <img src={mainIcon.img.src} alt={mainIcon.img.alt} />
                    </div>
                    <h2>{isOpen? mainIcon.title : ''}</h2>
                </div>
                <div className={style.menu}>
                    <ul>
                        {navBarMenuRender}
                    </ul>
                </div>
            </nav>
        </>
    )
}
