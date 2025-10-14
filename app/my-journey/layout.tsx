import "../globals.css";
import Navbar from "@/components/shared/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mb-8">{children}</div>
    </>
  );
}
