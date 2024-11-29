// ** Style
import style from '../css/components/navBar.module.css'
import { useState } from 'react'
import { navBarData } from '../data/navMenu'
import { useNavigate } from 'react-router-dom';



export default function NavBar() {
    // ** Defaults
    const navigate = useNavigate();






    // ** States
    const [navMenuOpen,setNavMenuOpen] = useState<boolean>(false);
    const [mainIcon,setMainIcon] = useState({
        id: navBarData[0].id,
        icon: {
            src: navBarData[0].icon.src,
            alt: navBarData[0].icon.alt
        },
        name: navBarData[0].name
    })





    // ** Handlers
    const navOpenToggle = ()=>{setNavMenuOpen(!navMenuOpen)}
    const changePageHandler = (e:React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        const index = Number(e.currentTarget.id);
        setMainIcon({
            id: navBarData[index].id,
            icon: {
                src: navBarData[index].icon.src,
                alt: navBarData[index].icon.alt
            },
            name: navBarData[index].name
        });
        navigate(navBarData[index].path);
        navOpenToggle();
    }





    // ** Renders
    const navBarDataRender = navBarData.map((navPage)=>
            {
                if(navPage.id !== mainIcon.id)
                {
                    return (
                        <li onClick={(e)=>{changePageHandler(e)}} key={navPage.id} id={navPage.id}>
                            <div className={style.page_icon}>
                                <img src={navPage.icon.src} alt={navPage.icon.alt} />
                            </div>
                            <h2>{navPage.name}</h2>
                        </li>
                    )
                }
            }

        )



    return (
        <>
            <nav>
                <div className={style.navBar_main_icon}>
                    <div className={style.page_icon} onClick={navOpenToggle}>
                        <img src={mainIcon.icon.src} alt={mainIcon.icon.alt}/>
                    </div>
                    {navMenuOpen && <h2>{mainIcon.name}</h2>} 
                </div>
                {
                    navMenuOpen && 
                    <div className={style.nav_menu}>
                        <ul>
                            {navBarDataRender}
                        </ul>
                    </div>
                }
            </nav>
        </>
    )
}
