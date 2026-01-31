export default function LoginPage() {
  return (
    <div className="px-6 py-10 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">
        Login
      </h1>

      <p className="text-gray-600 mb-6">
        Login to access your dashboard and deals.
      </p>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-6 rounded"
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Login
      </button>
    </div>
  );
}
