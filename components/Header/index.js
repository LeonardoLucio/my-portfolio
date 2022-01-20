import styles from '../../styles/Header.module.css'

export default function Header() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <a href="#">HOME</a>
      <a href="#">WORK</a>
      <a href="#">ABOUT</a>
      </div>
    </div>
  );
}