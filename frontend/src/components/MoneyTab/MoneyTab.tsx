import styles from './MoneyTab.module.scss';
import { BillType } from '../../types/billType';
import Bill from './Bill/Bill';

const BILLS: BillType[] = [
    {
        value: '0.50',
        src: '/images/50st.png',
    },
    {
        value: '1',
        src: '/images/oneLev.png',
    },
    {
        value: '2',
        src: '/images/twoLeva.jpg',
    },
];

type Props = { balanceHandler: (insertedMoney: number) => void };

const MoneyTab: React.FC<Props> = ({ balanceHandler }) => {
    return (
        <div className={styles.container}>
            {BILLS.map((bill) => (
                <Bill key={bill.value} bill={bill} balanceHandler={balanceHandler} />
            ))}
        </div>
    );
};

export default MoneyTab;
