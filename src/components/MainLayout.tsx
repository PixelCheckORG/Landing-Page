import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

