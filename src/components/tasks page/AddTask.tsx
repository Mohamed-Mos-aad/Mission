import style from '../../css/components/tasks page/addTask.module.css'
import addIcon from '../../assets/task page/addIcon.svg'
import { useState } from 'react'
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
        const newTasks = [task,...tasks];
        
        setUserData((prev)=>({
            ...prev,
            tasks: newTasks
        }))
        setAddTaskComponentShow(false);
    }








    return (
        <>
            <div className={style.addTask_container}>
                <form>
                    <input type="text" placeholder='What is  your task ?' onChange={(e)=>{valueChangeHandler('title',e)}}/>
                    <textarea placeholder='Note' onChange={(e)=>{valueChangeHandler('description',e)}}></textarea>
                </form>
                <div className={style.done}>
                    <img src={addIcon} alt="Add Icon" onClick={addTaskHandler}/>
                </div>
            </div>
        </>
    )
}
