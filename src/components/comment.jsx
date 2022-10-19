import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/thiagocdn.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Cedran Santos</strong>
                            <time title="11 de Maio às 11h13" dateTime="2022-05-11 08:13:00">Cerca de 1hr atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom!! Parabains!</p>
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