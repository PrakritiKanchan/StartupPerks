// components/deals/DealCard.tsx
import React from "react";
import ClaimButton from "./ClaimButton";

interface DealCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
}

const DealCard: React.FC<DealCardProps> = ({ id, title, description, price }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="font-bold text-green-600 mb-3">Price: {price}</p>
      <ClaimButton dealId={id} />
    </div>
  );
};

export default DealCard;
