import "./globals.css";
import "../styles/animations.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Top navigation bar */}
        <Navbar />

        {/* Main content area */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer section */}
        <Footer />
      </body>
    </html>
  );
}
