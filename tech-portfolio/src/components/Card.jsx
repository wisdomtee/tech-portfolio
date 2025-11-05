import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
