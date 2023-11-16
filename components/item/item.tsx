import { IMovie } from '@/models/IMovie';

import styles from './item.module.css';

export default function Item(props: IMovie) {
  const { poster_path, title, release_date } = props;
  const img: string = 'https://image.tmdb.org/t/p/w500' + poster_path;
  return (
    <section className={styles.card}>
      <img src={img} alt={title} />
      <div className={styles['card-body']}>
        <h5>{title}</h5>
        <small className={styles['text-muted']}>{release_date}</small>
      </div>
    </section>
  );
}
