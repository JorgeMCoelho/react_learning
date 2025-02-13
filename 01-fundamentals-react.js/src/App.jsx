import { Header } from "./components/Header";
import { Post } from "./components/Post";

import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Jorge Coelho"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nesciunt ea quis optio deserunt nam. Nobis hic sed voluptatem impedit, quaerat ipsum et nesciunt odio amet eaque, pariatur laboriosam recusandae."
          />
          <Post 
            author="António Costa"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nesciunt ea quis optio deserunt nam. Nobis hic sed voluptatem impedit, quaerat ipsum et nesciunt odio amet eaque, pariatur laboriosam recusandae."
          />
        </main>
      </div>

      
    </div>

  )
}
