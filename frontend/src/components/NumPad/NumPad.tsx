import styles from './NumPad.module.scss';
import Button from './Button/Button';
import Num from './Num/Num';

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 0, 11];

type Props = {
    confirmHandler: () => void;
    cancelHandler: () => void;
    cleanHandler: () => void;
    setCodeHandler: (digit: string) => void;
};

const NumPad: React.FC<Props> = ({
    confirmHandler,
    cancelHandler,
    cleanHandler,
    setCodeHandler,
}) => {

    return (
        <>
            <div className={styles['buttons-container']}>
                <Button handler={cancelHandler} value='Cancel' modifier='red' />
                <Button handler={confirmHandler} value='Confirm' modifier='green' />
                <Button handler={cleanHandler} value='Clean' modifier='purple' />
            </div>
            <div className={styles['nums-container']}>
                {buttons.map((num) => (
                    <Num
                        handler={setCodeHandler}
                        key={num === 11 ? num + Math.random() : num}
                        value={num}
                    />
                ))}
            </div>
        </>
    );
};

export default NumPad;
