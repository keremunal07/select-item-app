import React from "react";
import { useItemsContext } from "../contexts/ItemsContext";
import Item from "./Item";
import { Item as ItemType } from "../types/item";
import ItemsContainer from "./ItemsContainer";

const ItemList: React.FC = () => {
  const { itemList, setSelectedItemList, setItemList } = useItemsContext();

  const handleClick = (item: ItemType) => {
    setSelectedItemList((prev: ItemType[]) => [...prev, item]);
    setItemList((prev: ItemType[]) =>
      prev.filter((_item: ItemType) => _item.id != item.id)
    );
  };

  const handleMethodClick = () => {
    setSelectedItemList((prev: ItemType[]) => [...prev, ...itemList]);
    setItemList([]);
  };

  return (
    <ItemsContainer
      title="Item List"
      method={{ name: "Select All", handler: () => handleMethodClick() }}
    >
      {itemList.length ? (
        itemList.map((item: ItemType) => (
          <Item key={item.id} item={item} onClick={handleClick} />
        ))
      ) : (
        <div className="text-center text-secondary pt-4">No Items Found</div>
      )}
    </ItemsContainer>
  );
};

export default ItemList;
