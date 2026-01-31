type Deal = {
  id: string;
  name: string;
};

export default function DashboardPage() {
  const claimedDeals: Deal[] = [];

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold">
        My Dashboard
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your claimed deals here.
      </p>

      <div className="mt-6">
        {claimedDeals.length === 0 ? (
          <p className="text-gray-500">
            You have not claimed any deals yet.
          </p>
        ) : (
          <ul>
            {claimedDeals.map((deal) => (
              <li key={deal.id}>
                {deal.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
