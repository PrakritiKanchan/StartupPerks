import React, { useState } from "react";

interface DealFiltersProps {
  onFilterChange: (filter: string) => void;
}

const DealFilters: React.FC<DealFiltersProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search deals..."
        value={filter}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default DealFilters;
