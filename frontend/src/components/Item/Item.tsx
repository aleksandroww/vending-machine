import styles from './Item.module.scss';
import { ItemType } from '../../types/itemType';

type Props = { item: ItemType };

const Item: React.FC<Props> = ({ item }) => {
    return (
        <div className={styles.container}>
            <div className={styles['image-container']}>
                <img className={styles.image} src={item.src} alt='img' />
            </div>
            <div className={styles.info}>
                <span className={styles.code}>{item.id}</span>
                <span className={styles.price}>{item.price.toFixed(2)} BGN</span>
            </div>
        </div>
    );
};

export default Item;
