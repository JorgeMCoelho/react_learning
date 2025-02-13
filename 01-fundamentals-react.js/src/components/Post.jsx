import styles from './Post.module.css';


export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/JorgeMCoelho.png" />
                    <div className={styles.authorInfo}>
                        <strong>Jorge Coelho</strong>
                        <span>Web Developer</span>

                    </div>
                </div>

                <time title="13 feb 2025 at 14:15h" dateTime="2025-02-13 14:15:00"> Published 1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>Hello all!!</p>
                <p>I've just made a post. This is a project of my react course. And I'm loving it</p>
                <p> <a href="#">jorge.coelho/reactlearning</a></p>
                <p><a href="#">#newproject #react #supercool</a></p>
            </div>

        </article>
    )
}