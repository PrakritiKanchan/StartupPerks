export default function RegisterPage() {
  return (
    <div className="px-6 py-10 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">
        Register
      </h1>

      <p className="text-gray-600 mb-6">
        Create an account to claim startup deals.
      </p>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-2 mb-4 rounded"
      />

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
        Register
      </button>
    </div>
  );
}
