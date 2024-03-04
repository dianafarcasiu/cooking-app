import React from "react";

const ListItem = ({ item, onClick }) => {
  return (
    <div>
      <li className="list-group-item" onClick={() => onClick(item)}>
        {item}
      </li>
    </div>
  );
};

export default ListItem;
