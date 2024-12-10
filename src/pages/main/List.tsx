// ** Style
import style from '../../css/pages/main/list.module.css'
// ** Assets
import checkBox from '../../assets/formCheckBox.svg'
import checkedBox from '../../assets/formCheckedBox.svg'
import addIcon from '../../assets/addIcon.svg'
import { useState } from 'react'



export default function List() {
    const [listTasks, setListTasks] = useState([
        { id: '0', title: 'task title', done: false },
        { id: '1', title: 'task title', done: false },
        { id: '2', title: 'task title', done: false }
    ]);




    // Handlers
    const taskStateToggleHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>)=>{
        const doneState = e.currentTarget.getAttribute('data-done');
        if(doneState === 'false')
        {
            e.currentTarget.src = checkedBox;
            e.currentTarget.setAttribute('data-done','true');
        }
        else
        {
            e.currentTarget.src = checkBox;
            e.currentTarget.setAttribute('data-done','false');
        }
    }
    const changeTaskTitleHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const newTitle = e.currentTarget.value;
        const taskId = e.currentTarget.id;
        setListTasks((prev) => {
            const updatedList = prev.map((task) => 
                task.id === taskId ? { ...task, title: newTitle } : task
            );
            return updatedList;
        });
    }





    // ** Renders
    const listTasksRender = listTasks.map((task)=>(
        <div className={style.task} key={task.id}>
            <img src={checkBox} data-done={task.done} alt="Check box icon" onClick={(e)=>{taskStateToggleHandler(e)}}/>
            <input type="text" value={task.title} id={task.id} onChange={(e)=>{changeTaskTitleHandler(e)}}/>
        </div>
    ))





    return (
        <>
            <div className={style.list_container}>
                <div className={style.list_details}>
                    <h2>List Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae est tenetur alias sequi eveniet dignissimos quod nam quisquam? Iste ab officia rerum, quaerat et reprehenderit consequuntur soluta voluptatem eveniet.</p>
                    <div className={style.progressbar}>
                        <div className={style.progressbar_done}>
                            <span>0%</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>
                <div className={style.tasks_list} id='listTasks'>
                    {listTasksRender}
                    <div className={`${style.add_task} ${style.task}`}>
                        <img src={addIcon} alt="Add icon" />
                        <input type="text" placeholder='write a task'/>
                    </div>
                </div>
            </div>
        </>
    )
}
