import React from "react";

// Home page component for StartupPerks
export default function HomePage() {
  return (
    <div className="p-8">
      {/* Main heading */}
      <h1 className="text-4xl font-bold mb-4">
        Welcome to StartupPerks!
      </h1>

      {/* Intro paragraph */}
      <p className="text-lg text-gray-700">
        Hey there! This is your Next.js app up and running. The Navbar at the top
        and Footer at the bottom are already set up for you.
      </p>

      {/* Optional additional message */}
      <p className="mt-4 text-gray-600">
        Start editing <code>app/page.tsx</code> to customize your landing page.
      </p>
    </div>
  );
}
