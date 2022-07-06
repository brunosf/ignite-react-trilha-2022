import styles from "./Header.module.css";
import logoIgnite from '../assets/ignite-logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logotipo do Ignite Feed" />
      <h1>Ignite Feed</h1>
    </header>
  )
}
