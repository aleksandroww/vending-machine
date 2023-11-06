import styles from './Display.module.scss';

type Props = React.FC<{ balance: number; code: string }>;

const Display: Props = ({ balance, code }) => {
    return (
        <div className={styles.screen}>
            {balance ? (
                <div className={styles['screen-inner']}>
                    <p className={styles.balance}>Balance: {balance.toFixed(2)} BGN</p>
                    <p className={styles['item-code']}>
                        CODE:
                        <span className={styles.blue}>{code}</span>
                        <span className={`${styles.blue} ${styles.blink}`}>_</span>
                    </p>
                    <p className={styles['succ-more']}>Press: Cancel - to exit</p>
                </div>
            ) : (
                <div className={styles['start-screen']}>
                    <p className={styles.red}>Welcome.</p>
                    <p className={styles.red}>What should be?</p>
                    <p className={`${styles.red} ${styles.blink}`}>INSERT MONEY</p>
                </div>
            )}
        </div>
    );
};

export default Display;
