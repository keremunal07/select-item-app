import React from "react";
import { ItemContainerProps } from "../types/items-container";
const ItemsContainer: React.FC<ItemContainerProps> = ({
  title,
  children,
  method,
}) => {
  return (
    <div className="itemListContainer">
      <div className="box p-4 w-100">
        <h3 className="text-center pb-3">{title}</h3>
        <div className="itemsWrapper  px-2">{children}</div>
        <div className="d-flex justify-content-center pt-4">
          <span onClick={method?.handler} className="method">
            {method?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
