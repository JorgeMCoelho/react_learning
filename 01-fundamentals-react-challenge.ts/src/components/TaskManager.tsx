import { PlusCircle } from 'phosphor-react';

import styles from './TaskManager.module.css';

export function TaskManager() {
    return (
        <div className={styles.taskManager}>
            <form className={styles.addTaskForm}>
                <textarea 
                    name=""
                    placeholder='Add a new task' 
                    id=""
                    //value = 'temporary'

                />
                <button type='submit'>
                    Add Task
                    <PlusCircle size={16} weight="bold" />

                </button>

            </form>
        </div>
    )
}