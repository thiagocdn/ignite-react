import styles from './post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/thiagocdn.png' />
                    <div className={styles.authorInfo}>
                        <strong>Thiago Cedran</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                
                <time title="11 de Maio às 11h13" dateTime="2022-05-11 08:13:00">Publicado há 1 hr</time>
            </header>

            <div className={styles.content}>
                <p>BLablablablablblablab</p>
                <p>Outro paragrafo</p>
                <p>Outro Novo paragrafinho muito lindo blablablablablbal</p>
                <p>👍{' '}<a href="#">github.com/thiagocdn</a></p>
                <p>
                    <a href='#'>#blablabla</a>{' '}
                    <a href='#'>#blablabla</a>{' '}
                    <a href='#'>#blablabla</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}