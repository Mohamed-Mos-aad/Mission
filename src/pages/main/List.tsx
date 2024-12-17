// ** Style
import style from '../../css/pages/main/list.module.css'
// ** Assets
import checkBox from '../../assets/formCheckBox.svg'
import checkedBox from '../../assets/formCheckedBox.svg'
import addIcon from '../../assets/addIcon.svg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { tasksPageData } from '../../data/taskPageData'




// ** Interfaces
interface Itask{
    id: string,
    title: string | undefined,
    done: boolean
}


export default function List() {
    const { id } = useParams<{ id: string }>();




    // ** States
    const [list,setList] =  useState(tasksPageData.lists[Number(id)]);
    const [listTasks, setListTasks] = useState<Itask[]>([]);
    const [listProgressPrec,setListProgressPrec] = useState({
        completedPrec: 0,
        unCompletedPrec: 100
    })



    // ** Handlers
    const taskStateToggleHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>,taskId:string)=>{
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

        setListTasks(prev =>
            prev.map(task => 
                task.id === taskId
                    ? { ...task, done: !task.done }
                    : task
            )
        );
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
    const addTaskHandler = ()=>{
        const addTaskInput = document.getElementById('addTaskInput') as HTMLInputElement;
        setListTasks((prev)=>{
            const newTask = { id: listTasks.length.toString(), title: addTaskInput?.value, done: false }
            addTaskInput.value = '';
            return[...prev,newTask];
        })
    }
    const addTaskByEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter')
        {
            addTaskHandler();
        }
    } 
    const changeListTitleHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setList(prev=>({
            ...prev,
            title: e.target.value
        }))
    }




    // ** Renders
    const listTasksRender = listTasks.map((task)=>(
        <div className={style.task} key={task.id}>
            <img src={checkBox} data-done={task.done} alt="Check box icon" onClick={(e)=>{taskStateToggleHandler(e,task.id)}}/>
            <input type="text" value={task.title} id={task.id} onChange={(e)=>{changeTaskTitleHandler(e)}}/>
        </div>
    ))





    // ** UseEffect
    useEffect(() => {
        const completed = listTasks.filter((task) => task.done).length;
        
        const completedPercentage = (completed / listTasks.length) * 100;
        const doneProgress = document.getElementById(`${style.doneProgress}`);
        const undoneProgress = document.getElementById(`${style.undoneProgress}`);
        if(doneProgress)
        {
            doneProgress.style.width = `${completedPercentage}%`;
        }

        if(undoneProgress)
        {
            undoneProgress.style.width = `${100 - completedPercentage}%`;
        }

        setListProgressPrec({
            completedPrec: Math.round(completedPercentage),
            unCompletedPrec: 100 - Math.round(completedPercentage)
        })
    }, [listTasks]);







    return (
        <>
            <div className={style.list_container}>
                <div className={style.list_details}>
                    <input type="text" name="" id="" defaultValue={list.title} onChange={(e)=>{changeListTitleHandler(e)}}/>
                    <textarea name="" id="" defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae est tenetur alias sequi eveniet dignissimos quod nam quisquam? Iste ab officia rerum, quaerat et reprehenderit consequuntur soluta voluptatem eveniet.'></textarea>
                    <div className={style.progressbar}>
                        <div id={style.doneProgress}></div>
                        <div id={style.undoneProgress}></div>
                        <div className={style.progressbar_done}>
                            <span>{listProgressPrec.completedPrec > 0 ? listProgressPrec.completedPrec : 0}%</span>
                            <span>{listProgressPrec.unCompletedPrec < 100 ? listProgressPrec.unCompletedPrec : 100}%</span>
                        </div>
                    </div>
                </div>
                <div className={style.tasks_list} id='listTasks'>
                    <div className={style.tasks_container}>
                        {listTasksRender}
                    </div>
                    <div className={`${style.add_task} ${style.task}`}>
                        <img src={addIcon} alt="Add icon" onClick={addTaskHandler}/>
                        <input type="text" placeholder='write a task' id='addTaskInput' onKeyUp={(e)=>{addTaskByEnterHandler(e)}}/>
                    </div>
                </div>
            </div>
        </>
    )
}
