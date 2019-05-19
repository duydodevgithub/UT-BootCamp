import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
const List = props => (
  <ul className="list-group">
    {props.groceries.map(item => (
      <li className="list-group-item" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
