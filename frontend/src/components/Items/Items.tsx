import styled from './Items.module.scss';
import { ItemType } from '../../types/itemType';
import Item from '../Item/Item';

type Props = { items: ItemType[] };

const Items: React.FC<Props> = ({ items }) => {
    return (
        <div className={styled.container}>
            {items?.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Items;
