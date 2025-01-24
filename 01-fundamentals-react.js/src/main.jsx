import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { Post } from './Post.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Post 
      author="Jorge Coelho"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nesciunt ea quis optio deserunt nam. Nobis hic sed voluptatem impedit, quaerat ipsum et nesciunt odio amet eaque, pariatur laboriosam recusandae."  
    />
  </StrictMode>,
)
