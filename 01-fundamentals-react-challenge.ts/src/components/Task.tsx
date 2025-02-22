import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskType {
    content: string;
    isCompleted: boolean;
    onDeleteTask: (taskToDelete: string) => void;
    onToggleTask: (taskToComplete: string) => void;
}

export function Task({ content, onDeleteTask, onToggleTask }: TaskType) {
    
    function handleDeleteTask(){
        onDeleteTask(content);
    }

    function handleToggleTask(){
        onToggleTask(content);
    }

    return(
        <div className={styles.task}>
            <div className={styles.taskContent}>
                <input onChange={handleToggleTask} type='checkbox' />
                <label className={styles.taskDescription}>{content}</label>
            </div>

            <button onClick={handleDeleteTask} title='Delete Task'>
                <Trash size={24} />
            </button>
        </div>

    )
}