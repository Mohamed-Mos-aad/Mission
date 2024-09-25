import style from '../../style/pages/tasks.module.css'

import AppLogo from '../../assets/AppLogo.png'
import UnCheckedBox from '../../assets/UnCheckedBox.png'
import CheckedBox from '../../assets/CheckedBox.png'
import { Grid2X2, LayoutList, Plus } from 'lucide-react'
import { useState } from 'react'




export default function Tasks() {
    // ** States 
    const [displayGrid,setDisplayGrid] = useState<boolean>(true);





    // ** Handlers
    const toggleDisplaygridHandle = ()=>{
        setDisplayGrid(!displayGrid);
    }




    
    return (
        <>
            <div className={style.tasksPage_container}>
                <header>
                    <div className={style.logo}>
                        <img src={AppLogo} alt="App logo" />
                        Mission
                    </div>
                    <div className={style.page_setting} onClick={toggleDisplaygridHandle}>
                        {displayGrid? <LayoutList /> : <Grid2X2 />}
                    </div>
                </header>
                <section>
                    <h2>Hi Name</h2>
                    <p>Let's make some achievements</p>
                </section>
                <section>
                    <h3>Lists</h3>
                    <div className={style.lists_container}>
                        <div className={style.list}>
                            <h4>List Title</h4>
                        </div>
                        <div className={style.list}>
                            <h4>List Title</h4>
                        </div>
                        <div className={style.list}>
                            <h4>List Title</h4>
                        </div>
                        <div className={style.add_list}>
                            <Plus size={40} strokeWidth='2.25px'/>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Tasks</h3>
                    <div className={`${style.tasks_container} ${displayGrid? style.displayGrid : style.displayList}`}>
                        <div className={style.task}>
                            <Plus size={26} strokeWidth='2.25px'/>
                            <label htmlFor="">Write a task</label>
                        </div>
                        <div className={style.task}>
                            <img src={UnCheckedBox} alt="" />
                            <label htmlFor="">Test</label>
                        </div>
                        <div className={style.task}>
                            <img src={UnCheckedBox} alt="" />
                            <label htmlFor="">Test</label>
                        </div>
                        <div className={style.task}>
                            <img src={UnCheckedBox} alt="" />
                            <label htmlFor="">Test</label>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Completed</h3>
                    <div className={`${style.completed_container} ${displayGrid? style.displayGrid : style.displayList}`}>
                        <div className={style.task}>
                            <img src={CheckedBox} alt="" />
                            <label htmlFor="">Test</label>
                        </div>
                        <div className={style.task}>
                            <img src={CheckedBox} alt="" />
                            <label htmlFor="">Test</label>
                        </div>
                        <div className={style.task}>
                            <img src={CheckedBox} alt="" />
                            <label htmlFor="">Test</label>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
