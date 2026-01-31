"use client";

export default function DealDetailsPage() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold">
        Deal Details
      </h1>

      <p className="mt-4 text-gray-600">
        This page shows details of a selected deal.
      </p>

      <button
        className="mt-6 px-4 py-2 bg-black text-white rounded"
      >
        Claim Deal
      </button>
    </div>
  );
}
