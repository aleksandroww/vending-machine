import styles from './Bill.module.scss';
import { BillType } from '../../../types/billType';

type Props = { bill: BillType; balanceHandler: Function };

const Bill: React.FC<Props> = ({ balanceHandler, bill }) => {
    return (
        <button
            onClick={(e) => balanceHandler(Number(e.currentTarget.value))}
            className={styles.button}
            value={bill.value}
        >
            <img className={styles.image} src={bill.src} alt={bill.value} />
        </button>
    );
};

export default Bill;
