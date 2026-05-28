import { Item } from "../Item/Item";

export const ItemDetail = () => {
    return (
    <Item {...Item} >
        <button className="btn">Agregar al carrito</button>
    </Item>
    );
};