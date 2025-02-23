import { Header } from './components/Header';
import { TaskManager } from './components/TaskManager';

import './global.css';
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskManager />
      </div>
    </div>
  )
}
