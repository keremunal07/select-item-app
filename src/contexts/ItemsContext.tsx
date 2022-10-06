import React, { createContext, useContext, useEffect, useState } from "react";
import { Item } from "../types/item";

const mockItemList: Item[] = [
  { id: 1, name: "Jhon Scot" },
  { id: 2, name: "Vannessa Rail" },
  { id: 3, name: "Raul Mill" },
  { id: 4, name: "Mike underwood" },
  { id: 5, name: "Ronald Flex" },
];

const defaultSelectedItem: Item[] = [
  { id: 6, name: "Default Selected 1" },
  { id: 7, name: "Default Selected 2" },
];

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
