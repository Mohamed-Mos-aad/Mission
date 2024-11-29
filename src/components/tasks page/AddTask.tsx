// ** Style
import style from '../../css/components/tasks page/addTask.module.css'
// ** Assets
import addIcon from '../../assets/task page/addIcon.svg'
import calendarIcon from '../../assets/task page/calendarIcon.svg'
import priorityIcon from '../../assets/task page/priorityIcon.svg'
import listsIcon from '../../assets/task page/listsIcon.svg'
import tagIcon from '../../assets/task page/tagIcon.svg'
// ** Hooks
import { useState } from 'react'
// ** Other
import { tasksPageData } from '../../data/taskPageData'



interface IAddTask{
    tasks: Itask[],
    setUserData: React.Dispatch<React.SetStateAction<typeof tasksPageData>>;
    setAddTaskComponentShow: (show:boolean)=> void
}
interface Itask{
    id: number,
    listId: number,
    title: string,
    description: string,
    done: boolean
}

export default function AddTask({tasks,setUserData,setAddTaskComponentShow}:IAddTask) {
    // ** States
    const [task,setTask] = useState<Itask>({
        id: tasks.length + 1,
        listId: 0,
        title: '',
        description: '',
        done: false
    });







    // ** Handlers
    const valueChangeHandler = (name:string,e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
        setTask((prev)=>({
            ...prev,
            [name]: e.target.value
        }));
    };
    const addTaskHandler = ()=>{
        if(task.title !== '')
        {
            const newTasks = [task,...tasks];    
            setUserData((prev)=>({
                ...prev,
                tasks: newTasks
            }))
        }
        setAddTaskComponentShow(false);
    }








    return (
        <>
            <div className={style.addTask_container}>
                <form>
                    <input type="text" placeholder='What is  your task ?' onChange={(e)=>{valueChangeHandler('title',e)}}/>
                    <textarea placeholder='Note' onChange={(e)=>{valueChangeHandler('description',e)}}></textarea>
                </form>
                <div className={style.component_footer}>
                    <div className={style.options}>
                        <div className={style.options_item}>
                            <img src={calendarIcon} alt="Calendar icon" />
                        </div>
                        <div className={style.options_item}>
                            <img src={priorityIcon} alt="Priority icon" />
                        </div>
                        <div className={style.options_item}>
                            <img src={listsIcon} alt="Lists icon" />
                        </div>
                        <div className={style.options_item}>
                            <img src={tagIcon} alt="Tag icon" />
                        </div>
                    </div>
                    <div className={style.done}>
                        <img src={addIcon} alt="Add Icon" onClick={addTaskHandler}/>
                    </div>
                </div>
            </div>
        </>
    )
}
