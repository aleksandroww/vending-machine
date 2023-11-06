import { useEffect, useState } from 'react';
import styles from './Machine.module.scss';
import { getItems } from '../../services/items';
import { ItemType } from '../../types/itemType';
import Items from '../Items/Items';
import Display from '../Display/Display';
import NumPad from '../NumPad/NumPad';
import MoneyTab from '../MoneyTab/MoneyTab';
import Spinner from '../Spinner/Spinner';
import swal from 'sweetalert';

const Machine = () => {
    const [balance, setBalance] = useState(0);
    const [code, setCode] = useState('');
    const [items, setItems] = useState<ItemType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getItems();
                setItems(data);
            } catch (error) {
                swal(`Something went wrong!`);
            }
            setLoading(false);
        };

        fetchItems();
    }, []);

    const setBalanceHandler = (insertedMoney: number) => {
        const newBalance: number = balance + insertedMoney;

        if (newBalance >= 99.9) {
            swal(`You are not allowed to insert more than 99.99 BGN!`);
        } else {
            setBalance(newBalance);
        }
    };

    const setCodeHandler = (digit: string) => {
        const newCode: string = code + digit;

        if (newCode.length > 3) {
            swal(`The code should be maximum 3 digits!`);
        } else if (balance === 0) {
            swal(`Please insert money first!`);
        } else {
            setCode(newCode);
        }
    };

    const cancelHandler = () => {
        if (balance) {
            swal(`You have ${balance.toFixed(2)} BGN change!`);
            setBalance(0);
            setCode('');
        }
    };

    const confirmHandler = () => {
        if (balance) {
            const selectedElement: ItemType[] = items.filter(
                (element) => element.id === Number(code)
            );
            if (code.length < 3 || selectedElement.length === 0) {
                swal('Invalid code!');
                return;
            }

            if (selectedElement[0].price <= balance) {
                swal(
                    `You have order ${selectedElement[0].title}!\n${balance >= 0
                        ? `You have ${(balance - selectedElement[0].price).toFixed(
                            2
                        )} BGN change!`
                        : ''
                    }`
                );
            } else {
                swal('Not enough money!');
                return;
            }

            setBalance(0);
            setCode('');
        }
    };

    const cleanHandler = () => {
        if (balance) {
            setCode('');
        }
    };

    if (loading) {
        return (
            <Spinner />
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <Items items={items} />
            </div>
            <div className={styles.panel}>
                <Display balance={balance} code={code} />
                <MoneyTab balanceHandler={setBalanceHandler} />
                <NumPad
                    confirmHandler={confirmHandler}
                    cancelHandler={cancelHandler}
                    cleanHandler={cleanHandler}
                    setCodeHandler={setCodeHandler}
                />
            </div>
        </div>
    );
};

export default Machine;
