import { format, formatDistanceToNow } from 'date-fns'; // documentation https://date-fns.org/v4.1.0/docs/format
//import ptBR from 'date-fns/locale/pt-BR' -----> to translate the date into another language format

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

// author: { avatar_url:"", name: "", role: ""}
// publishedAt: Date
// content: String

// export function Post(props){} destructuring into ----> export function Post({author}) to remove the props.author.property ---> into author.property
export function Post({ author, publishedAt, content }){
    const publishedDateFormatted = format(publishedAt, "do LLLL 'at' HH:mm'h' ");
    
    /* translated date format
    const publishedDateFormatted = format(publishedAt, "do LLLL 'at' HH:mm'h' ", {
        locale: ptBR,
    }); */

    const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>

                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> {publishDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{
                    if (line.type = 'paragraph'){
                        return <p>{line.content}</p>
                    } else if (line.type = 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder='Leave a comment'
                />
                
                <footer>
                <button type='submit'>Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}