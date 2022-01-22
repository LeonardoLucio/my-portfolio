import styles from '../../styles/PerfilGiHub.module.css'
import { useEffect, useState } from 'react';

export default function Avatar() {
  const [avatar, setAvatar] = useState()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <img src={"https://avatars.githubusercontent.com/u/73317150?v=4"} alt='avatar'></img>
      </div>
    </div>
  );
}