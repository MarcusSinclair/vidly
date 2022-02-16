import React, { Component } from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <div className="list-group">
      {items.map((item) => (
        <button
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          type="button"
          className={
            selectedItem === item
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {item[textProperty]}
        </button>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
