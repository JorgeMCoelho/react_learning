import { Header } from "./components/Header";
import { Post } from "./Post";

import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <h1>Hello World :D</h1>
      <Post
        author="Jorge Coelho"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nesciunt ea quis optio deserunt nam. Nobis hic sed voluptatem impedit, quaerat ipsum et nesciunt odio amet eaque, pariatur laboriosam recusandae."
      />
      <Post 
        author="António Costa"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nesciunt ea quis optio deserunt nam. Nobis hic sed voluptatem impedit, quaerat ipsum et nesciunt odio amet eaque, pariatur laboriosam recusandae."
      />
    </div>

  )
}
