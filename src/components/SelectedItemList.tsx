import React from "react";
import { useItemsContext } from "../contexts/ItemsContext";
import Item from "./Item";
import { Item as ItemType } from "../types/item";
import ItemsContainer from "./ItemsContainer";

const SelectedItemList: React.FC = () => {
  const { selectedItemList, setSelectedItemList, setItemList } =
    useItemsContext();

  const handleClick = (item: ItemType) => {
    setSelectedItemList((prev: ItemType[]) =>
      prev.filter((_item: ItemType) => _item.id != item.id)
    );
    setItemList((prev: ItemType[]) => [...prev, item]);
  };

  const handleMethodClick = () => {
    setItemList((prev: ItemType[]) => [...prev, ...selectedItemList]);
    setSelectedItemList([]);
  };
  return (
    <ItemsContainer
      title={"Selected Items"}
      method={{ name: "Clear", handler: () => handleMethodClick() }}
    >
      {selectedItemList.length ? (
        selectedItemList.map((item: ItemType) => (
          <Item key={item.id} item={item} onClick={handleClick} isSelected />
        ))
      ) : (
        <div className="text-center text-secondary pt-4">No Items Found</div>
      )}
    </ItemsContainer>
  );
};

export default SelectedItemList;
