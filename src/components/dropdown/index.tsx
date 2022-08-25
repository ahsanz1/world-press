import React from "react";
import { DropdownProps } from "../../lib/types/common";

const Dropdown = ({
  items,
  onSelect,
  className,
  itemsClassName,
}: DropdownProps) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div
          className={`flex flex-row justify-between gap-2 p-3 cursor-pointer ${itemsClassName}`}
          onClick={(e) => {
            e.preventDefault();
            onSelect(item);
          }}
          key={item.name.common}
        >
          <p className="font-normal text-base">{item.name.common}</p>
          <img className=""></img>
          <p>{item.flag}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
