import { format, formatDistanceToNow } from 'date-fns'; // documentation https://date-fns.org/v4.1.0/docs/format
//import ptBR from 'date-fns/locale/pt-BR' -----> to translate the date into another language format

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';

// author: { avatar_url:"", name: "", role: ""}
// publishedAt: Date
// content: String

// export function Post(props){} destructuring into ----> export function Post({author}) to remove the props.author.property ---> into author.property
export function Post({ author, publishedAt, content }){
    const [comments, setComents] = useState([
        'Really cool Post!',
    ]);

    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormatted = format(publishedAt, "do LLLL 'at' HH:mm'h' ");
    
    /* translated date format
    const publishedDateFormatted = format(publishedAt, "do LLLL 'at' HH:mm'h' ", {
        locale: ptBR,
    }); */

    const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    });


    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;
        
        setComents([...comments, newCommentText]); // ...comments, copy the array, adds the new comment value to the array

        setNewCommentText(''); //cleans the text area
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Leave a comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                
                <footer>
                <button type='submit'>Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>
    )
}