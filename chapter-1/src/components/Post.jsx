import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/brunosf.png" />
          <div className={styles.authorInfo}>
            <strong>Bruno Ferreira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe um comentário</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment hasBorder={false}/>
        <Comment hasBorder={false}/>
        <Comment hasBorder={false}/>
      </div>
    </article>
  )
}
