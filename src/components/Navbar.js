import styles from './Nav.modules.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Pokedex</h1>
      <small>By Camila Barros</small>
    </nav>
  );
}
