import React from "react";

const Card = ({ data }) => {
  const { days_since_contact, name, picture, status, tags } = data;
  return (
    <div className="w-full container mx-auto border-2 flex">
      <img src={picture} />
      <h1>name:{name}</h1>
      <p>{days_since_contact}</p>
      <p>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-slate-100 px-3 py-1 rounded-md text-sm text-slate-600"
          >
            {tag}
          </div>
        ))}
      </p>
      <p>{status}</p>
    </div>
  );
};

export default Card;
