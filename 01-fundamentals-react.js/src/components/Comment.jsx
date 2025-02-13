import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/JorgeMCoelho.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>António Costa</strong>
                            <time title='13 feb at 15:27h' datetime="2022-02-13 15:27:00">Commented 2h ago</time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Well done Jorge. It is great!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}