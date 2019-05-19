import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.friend.name} src={props.friend.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.friend.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.friend.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.friend.location}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
