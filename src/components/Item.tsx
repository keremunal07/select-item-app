import React from "react";
import { ItemProps } from "../types/item-box";
const Item: React.FC<ItemProps> = ({ item, isSelected, onClick }) => {
  const handleFirstLetter = (name: string) => name.charAt(0);

  return (
    <div
      onClick={() => onClick(item)}
      className="itemBox d-flex align-items-center justify-content-between p-2"
    >
      <div className="d-flex align-items-center gap-3">
        <div className="circle">
          <span>{item.name ? handleFirstLetter(item.name) : "-"}</span>
        </div>
        <div className="itemName">{item.name}</div>
      </div>
      {isSelected && <div className="removeItem me-3">x</div>}
    </div>
  );
};

export default Item;
