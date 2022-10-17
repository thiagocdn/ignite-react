import { Header } from "./components/header";
import { Post } from "./post";
import { Sidebar } from "./components/sidebar";

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiago Cedran"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iure eaque natus, assumenda reiciendis ea quasi rem laboriosam nesciunt saepe, dicta alias voluptas! Molestias rerum quasi iure corrupti quo cum?"
          />
          <Post
            author="Thiago Cedran"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iure eaque natus, assumenda reiciendis ea quasi rem laboriosam nesciunt saepe, dicta alias voluptas! Molestias rerum quasi iure corrupti quo cum?"
          />
          <Post
            author="Thiago Cedran"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iure eaque natus, assumenda reiciendis ea quasi rem laboriosam nesciunt saepe, dicta alias voluptas! Molestias rerum quasi iure corrupti quo cum?"
          />
        </main>
      </div>
    </div>
  )
}
