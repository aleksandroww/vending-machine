import styles from './Num.module.scss';

type Props = { handler: (digit: string) => void; value: number };

const Num: React.FC<Props> = ({ handler, value }) => {
  return (
    <button
      onClick={(e) => handler(e.currentTarget.value)}
      value={value}
      className={`${styles.button} ${value === 11 ? styles.hidden : ''}`}
    >
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.text}>{value}</span>
    </button>
  );
};

export default Num;
