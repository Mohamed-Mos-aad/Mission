import style from '../../css/pages/main/tasks.module.css'
import addIcon from '../../assets/addIcon.svg'
import doneIcon from '../../assets/doneIcon.svg'
import { useState } from 'react'
import { tasksPageData } from '../../data/taskPageData'



export default function Tasks() {
    // ** States
    const [userData,setUserData] =  useState({...tasksPageData});





    // ** Handlers
    const taskDoneToggelHandler = (id:number)=>{
        setUserData((prev)=> {
            const unpdatedTasks = prev.tasks.map((task)=>
                task.id === id ? {...task,done: !task.done} : task 
            )

            return {
                ...prev,
                tasks: unpdatedTasks
            }
        })
    }





    // ** Renders
    const listsRender = userData.lists.map((list)=>
        <div className={style.list} key={list.id}>
            {list.title}
        </div>
    )
    const tasksRender = userData.tasks.map((task)=>
        <div className={style.task} key={task.id}>
            <div className={style.task_title}>
                <div className={`${style.checkBox} ${task.done && style.done_checkBox}`} onClick={()=>{taskDoneToggelHandler(task.id)}}>
                    <img src={doneIcon} alt="done icon" />
                </div>
                <h2>{task.title}</h2>    
            </div>
            <div className={style.task_content}>
                {task.description}
            </div>
        </div>
    )





    return (
        <>
        <div className={style.tasks_page_container}>
            <div className={style.welcome}>
                <h1>Hi {userData.user.name}</h1>
                <p>Let's make some achievements.</p>
            </div>
            <div className={style.title}>
                Lists
            </div>
            <section className={style.lists_container}>
                <div className={style.add_list}>
                    <img src={addIcon} alt="Add Icon" />
                </div>
                {listsRender}
            </section>
            <div className={style.title}>
                Tasks
            </div>
            <div className={style.tasks_container}>
                <div className={style.add_task}>
                    write a task
                </div>
                {tasksRender}
            </div>
        </div>
        </>
    )
}
