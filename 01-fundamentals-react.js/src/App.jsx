import { Header } from "./components/Header";
import { Post } from "./components/Post";

import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JorgeMCoelho.png',
      name: 'Jorge Coelho',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hello all!! 👋🏻'},
      { type: 'paragraph', content: 'I just made a post. This is a project of my react course. And I\'m loving it'},
      { type: 'link', content: 'jorge.coelho/reactlearning'},
    ],
    publishedAt: new Date('2025-02-14 14:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'http://github.com/jfilipecostacoelho.png',
      name: 'João Coelho',
      role: 'Senior Developer',
    },
    content: [
      {type: 'paragraph', content: 'Howdy'},
      {type: 'paragraph', content:'This is a second post'},
      {type: 'link', content:'www.google.com'},
    ],
    publishedAt: new Date('2025-02-14 14:05:00')
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />)
          })};
        </main>
      </div>

      
    </div>

  )
}
