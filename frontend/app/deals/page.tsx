// app/deals/page.tsx
"use client";

import Link from "next/link";

export default function DealsPage() {
  // Abhi backend nahi hai, isliye simple dummy data
  const deals = [
    { id: "1", name: "AWS Credits", locked: false },
    { id: "2", name: "Notion Pro", locked: true },
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">Available Deals</h1>

      {deals.map((deal) => (
        <div
          key={deal.id}
          className="border p-4 mb-4 rounded"
        >
          <h2 className="text-lg">{deal.name}</h2>

          {deal.locked && (
            <p className="text-sm text-red-500">
              This deal is locked. Verification required.
            </p>
          )}

          <Link
            href={`/deals/${deal.id}`}
            className="text-blue-600 text-sm"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}