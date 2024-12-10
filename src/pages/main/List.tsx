// ** Style
import style from '../../css/pages/main/list.module.css'
// ** Assets
import checkBox from '../../assets/formCheckBox.svg'
import checkedBox from '../../assets/formCheckedBox.svg'
import addIcon from '../../assets/addIcon.svg'
import { useEffect, useState } from 'react'




// ** Interfaces
interface Itask{
    id: string,
    title: string | undefined,
    done: boolean
}


export default function List() {
    const [listTasks, setListTasks] = useState<Itask[]>([]);
    const [listProgress,setListProgress] = useState({
        completed: 0,
        uncompleted: 0
    })
    const [listProgressPrec,setListProgressPrec] = useState({
        completedPrec: 0,
        unCompletedPrec: 100
    })
    const root = document.querySelector(":root");



    // Handlers
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
        const uncompleted = listTasks.length - completed;

        setListProgress({ completed, uncompleted });

        // Update progress bar width
        if (root) {
            const completedPercentage = (completed / listTasks.length) * 100;
            root.style.setProperty('--completed-width', `${completedPercentage}%`);
            setListProgressPrec({
                completedPrec: Math.round(completedPercentage),
                unCompletedPrec: 100 - Math.round(completedPercentage)
            })
        }
    }, [listTasks]);






    return (
        <>
            <div className={style.list_container}>
                <div className={style.list_details}>
                    <h2>List Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae est tenetur alias sequi eveniet dignissimos quod nam quisquam? Iste ab officia rerum, quaerat et reprehenderit consequuntur soluta voluptatem eveniet.</p>
                    <div className={style.progressbar}>
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
