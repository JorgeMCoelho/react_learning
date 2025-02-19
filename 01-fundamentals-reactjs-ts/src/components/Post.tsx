import { format, formatDistanceToNow } from 'date-fns'; // documentation https://date-fns.org/v4.1.0/docs/format

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export function Post({ author, publishedAt, content }: PostProps){
    const [comments, setComments] = useState([
        'Really cool Post!',
    ]);

    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormatted = format(publishedAt, "do LLLL 'at' HH:mm'h' ");
    
    const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    });


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        
        setComments([...comments, newCommentText]); 

        setNewCommentText(''); 
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Please, leave a comment before submitting');
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleted);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

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
                    if (line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type = 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <footer>
                <button type='submit' disabled={isNewCommentEmpty}>
                    Comment
                </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}