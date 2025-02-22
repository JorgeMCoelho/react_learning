import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskType {
    content: string;
    isCompleted: boolean;
    onDeleteTask: (taskToDelete: string) => void;
    onCompleteTask: (taskToComplete: boolean) => void;
}

export function Task({ content, isCompleted, onDeleteTask, onCompleteTask }: TaskType) {
    
    function handleDeleteTask(){
        onDeleteTask(content);
    }

    function handleCompleteTask(){
        onCompleteTask(isCompleted);
    }

    return(
        <form className={styles.task}>
            <div className={styles.taskContent}>
                <input onChange={handleCompleteTask} type='checkbox' />
                <label className={styles.taskDescription}>{content}</label>
            </div>

            
            <button onClick={handleDeleteTask} title='Delete Task'>
                <Trash size={24} />
            </button>
        </form>

    )
}