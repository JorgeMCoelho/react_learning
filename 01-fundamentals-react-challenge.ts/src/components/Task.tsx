import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
    return(
        <form className={styles.task}>
            <div className={styles.taskContent}>
                <input type='checkbox' />
                <p className={styles.taskDescription}>Task description</p>
            </div>

            
            <button title='Delete Task'> {/*Add onClick event to delete task*/} 
                <Trash size={24} />
            </button>
        </form>

    )
}