import { PlusCircle, ClipboardText } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './TaskManager.module.css';
import { Task, TaskType } from './Task';



export function TaskManager() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            content: 'This is a task and I have to do it',
            isCompleted: false,
          },
          {
            id: 2,
            content: 'This is a second task',
            isCompleted: false,
          }
    ])

    const [taskCreatedCounter, setTaskCreatedCounter] = useState(2);

    const [taskCompletedCounter, setTaskCompletedCounter] = useState(0);

    const [newTaskText, setNewTaskText] = useState('');


    function handleNewTask(event: FormEvent){
        event.preventDefault();

        const newTask= {
            id: tasks.length + 1,
            content: newTaskText,
            isCompleted: false,
        };

        setTasks([...tasks, newTask]);

        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Please, write a task before submitting');
    }

    function deleteTask(taskToDelete: string){
        const taskWithoutDeleted = tasks.filter((task=>{
            return task.content !== taskToDelete;
        }))
        return setTasks(taskWithoutDeleted);
    }

    function completeTask(taskToComplete: boolean){
    }
    
    return (
        <div className={styles.taskManager}>
            <form onSubmit={handleNewTask} className={styles.addTaskForm}>
                <textarea 
                    name=""
                    placeholder='Add a new task' 
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type='submit'>
                    Add Task
                    <PlusCircle size={16} weight="bold" />
                </button>
            </form>

            <div className={styles.tasksInfo}>
                    <strong className={styles.tasksCreated}>Created Tasks <span className={styles.taskCounter}>{taskCreatedCounter}</span></strong> 
                    <strong className={styles.tasksCompleted}>Completed Tasks <span className={styles.taskCounter}>{taskCompletedCounter}</span></strong> 
            </div>
             
            <div className={styles.taskList}>
                {tasks.length > 0?(

                    <div className={styles.fullList}>
                        {tasks.map(tasks =>{
                            return (
                                <Task
                                    key={tasks.id}
                                    content={tasks.content}
                                    isCompleted={tasks.isCompleted}
                                    onDeleteTask={deleteTask} 
                                    onCompleteTask={completeTask}                          
                                />
                            )
                        })} 
                    </div>
                ):(
                <div className={styles.emptyList}>
                        <ClipboardText size={56} />
                        <strong>You don't have any tasks yet</strong>
                        <p>Please create some tasks and get organized</p>
                    </div>
                )}
            </div>

        </div>
    )
}