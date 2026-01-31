import React, { useState } from "react";

interface ClaimButtonProps {
  dealId: string;
}

const ClaimButton: React.FC<ClaimButtonProps> = ({ dealId }) => {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    alert(`You claimed deal ${dealId}!`);
  };

  return (
    <button
      onClick={handleClaim}
      disabled={claimed}
      className={`px-4 py-2 rounded text-white ${
        claimed ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {claimed ? "Claimed" : "Claim Deal"}
    </button>
  );
};

export default ClaimButton;
