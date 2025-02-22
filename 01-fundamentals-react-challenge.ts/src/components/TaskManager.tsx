import { PlusCircle, ClipboardText } from 'phosphor-react';

import styles from './TaskManager.module.css';
import { Task } from './Task';

export function TaskManager() {
    return (
        <div className={styles.taskManager}>
            <form className={styles.addTaskForm}>
                <textarea 
                    name=""
                    placeholder='Add a new task' 
                    //value = 'temporary'
                />
                <button type='submit'>
                    Add Task
                    <PlusCircle size={16} weight="bold" />
                </button>
            </form>

            <div className={styles.tasksInfo}>
                    <strong className={styles.tasksCreated}>Created Tasks <span className={styles.taskCounter}>0</span></strong> 
                    <strong className={styles.tasksCompleted}>Completed Tasks <span className={styles.taskCounter}>0</span></strong> 
            </div>

            <div className={styles.taskList}>
                <div className={styles.emptyList}>
                    <ClipboardText size={56} />
                    <strong>You don't have any tasks yet</strong>
                    <p>Please create some tasks and get organized</p>
                </div>

                <div className={styles.fullList}>
                    <Task />
                    <Task />
                </div>
            </div>

        </div>
    )
}