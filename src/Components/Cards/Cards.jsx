import React from "react";
import Card from "./Card";

const Cards = ({ friendsData }) => {
  console.log(friendsData);
  return (
    <div className="container mx-auto grid grid-cols-1 w-full items-center md:grid-cols-2 lg:grid-cols-4">
      {friendsData.map((data) => (
        <Card key={data.id} data={data}></Card>
      ))}
    </div>
  );
};

export default Cards;
