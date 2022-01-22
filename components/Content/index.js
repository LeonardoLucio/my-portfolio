import styles from '../../styles/Content.module.css'
import { useEffect, useState } from 'react';

export default function Content() {

  const [description, setDescription] = useState([])

  useEffect(() => {
      fetch('https://api.github.com/users/LeonardoLucio')
      .then(response => response.json())
      .then(data => setDescription(data))
  }, [])

  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
      <p>{description.bio}</p>
      </div>
    </div>
  );
}