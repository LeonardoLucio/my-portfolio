import styles from "../styles/Home.module.css";
import Avatar from '../components/perfilGithub/index'
import Content from '../components/Content/index'


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main} >
        <Avatar />
        <Content />
      </main>
    </div>
  );
}