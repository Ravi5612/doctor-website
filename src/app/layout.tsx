import Navbar from "@/app/components/navbar";
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <h1 className="text-red-600 text-4xl font-bold">
  Tailwind Working 🎉
</h1>


        {children}
      </body>
    </html>
  );
}
