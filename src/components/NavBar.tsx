// ** Assets
import taskPageIcon from '../assets/pages_icons/taskPageIcon.svg'
import calendarPageIcon from '../assets/pages_icons/calendarPageIcon.svg'
import searchPageIcon from '../assets/pages_icons/searchPageIcon.svg'
import habitPageIcon from '../assets/pages_icons/searchPageIcon.svg'
import matricesPageIcon from '../assets/pages_icons/matricesPageIcon.svg'
import pomodoroPageIcon from '../assets/pages_icons/pomodoroPageIcon.svg'
import controlPageIcon from '../assets/pages_icons/controlPageIcon.svg'
// ** Style
import style from '../css/components/navBar.module.css'



export default function NavBar() {
    return (
        <>
            <nav>
                <div className={style.navBar_main_icon}>
                    <div className={style.page_icon}>
                        <img src={taskPageIcon} alt="Task page icon" />
                    </div>
                    <h2>Tasks</h2>
                </div>
                <div className={style.nav_menu}>
                    <ul>
                        <li>
                            <div className={style.page_icon}>
                                <img src={calendarPageIcon} alt="Calendar page icon" />
                            </div>
                            <h2>Calendar</h2>
                        </li>
                        <li>
                            <div className={style.page_icon}>
                                <img src={searchPageIcon} alt="Search page icon" />
                            </div>
                            <h2>Search</h2>
                        </li>
                        <li>
                            <div className={style.page_icon}>
                                <img src={habitPageIcon} alt="Habit page icon" />
                            </div>
                            <h2>Habit</h2>
                        </li>
                        <li>
                            <div className={style.page_icon}>
                                <img src={matricesPageIcon} alt="Matrices page icon" />
                            </div>
                            <h2>Matrices</h2>
                        </li>
                        <li>
                            <div className={style.page_icon}>
                                <img src={pomodoroPageIcon} alt="Pomodoro page icon" />
                            </div>
                            <h2>Pomodoro</h2>
                        </li>
                        <li>
                            <div className={style.page_icon}>
                                <img src={controlPageIcon} alt="Control page icon" />
                            </div>
                            <h2>Control</h2>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
