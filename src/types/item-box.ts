import { Item } from "./item";

export interface ItemProps {
  item: Item;
  isSelected?: boolean;
  onClick: (item: Item) => void;
}
