import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './avatar'
import { Comment } from './comment'
import styles from './post.module.css'

export function Post({ author, content, publishedAt, postId }) {
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleCreateNewComment = (event) => {
        event.preventDefault()
        const content = newCommentText
        if(comments?.length > 0) {
            setComments([...comments, content])
        } else {
            setComments([content])
        }
        setNewCommentText('')
    }

    const handleNewCommentChange = (event) => {
        setNewCommentText(event.target.value)
    }

    const deleteComment = (commentToDelete)  => {
        const newPostComments = comments.filter(comment => comment !== commentToDelete)
        setComments(newPostComments)
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
                
                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if(line.type === 'paragraph') return (
                        <p key={`post-${postId}-line-${line.content}`}>{line.content}</p>
                    )
                    if(line.type === 'link') return (
                        <p key={`post-${postId}-line-${line.content}`}><a href="#">{line.content}</a></p>
                    )
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            {comments?.length > 0 && (
                <div className={styles.commentsList}>
                    {
                        comments.map((comment) => (
                            <Comment
                                key={`comment-${comment}`}
                                content={comment}
                                onDelete={deleteComment}
                            />
                        ))
                    }
                </div>
            )}
        </article>
    )
}