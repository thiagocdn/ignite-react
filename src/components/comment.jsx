import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './avatar'
import styles from './comment.module.css'

export function Comment({ content, onDelete }) {

    const handleDeleteComment = () => {
        onDelete(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/thiagocdn.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Cedran Santos</strong>
                            <time title="11 de Maio às 11h13" dateTime="2022-05-11 08:13:00">Cerca de 1hr atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}