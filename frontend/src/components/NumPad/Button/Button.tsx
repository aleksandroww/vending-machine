import styles from './Button.module.scss';

type Props = { handler: () => void; value: string; modifier: string };

const Button: React.FC<Props> = ({ handler, value, modifier }) => {
    return (
        <button
            onClick={() => handler()}
            className={`${styles.button} ${styles[modifier]}`}
        >
            {value}
        </button>
    );
};

export default Button;
