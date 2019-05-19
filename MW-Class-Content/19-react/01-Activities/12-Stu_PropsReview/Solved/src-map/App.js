import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {friends.map((friend) => (
        <FriendCard friend={friend}/> 
    ))}
  </Wrapper>
);

export default App;
