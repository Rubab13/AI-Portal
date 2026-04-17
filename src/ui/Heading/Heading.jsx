import styles from './Heading.module.css';

export default function Heading({ text }) {
  return (
    <div className={styles.titleWrap}>
      <span className={styles.line} aria-hidden="true" />
      <h2 className={styles.title}>{text}</h2>
      <span className={styles.line} aria-hidden="true" />
    </div>
  );
}
