import React, { createContext, useContext, useState } from "react";
import { Item } from "../types/item";
import { mockItemList, defaultSelectedItem } from "../constants/itemList";

export const ItemsContext = createContext<any>({});

export const useItemsContext = () => useContext(ItemsContext);

export const ItemsProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [itemList, setItemList] = useState<Item[]>(mockItemList);
  const [selectedItemList, setSelectedItemList] =
    useState<Item[]>(defaultSelectedItem);

  const value = {
    itemList,
    setItemList,
    selectedItemList,
    setSelectedItemList,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
