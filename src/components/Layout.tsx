import {Outlet} from "react-router";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";

const Layout = () => {
  return (
    <>
    <div className="min-h-screen w-full relative">
      {/* Lavender Blush Flow Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(315deg, #E1BEE7 0%, #F3E5F5 20%, #FCE4EC 40%, #FFF0F5 60%, #F8BBD9 80%, #E1BEE7 100%)`,
        }}
      />
          <Header/>
          <div className={"container mx-auto min-h-[95vh] pt-24"}>
            <Outlet />
            <Toaster/>
          </div>
          <Footer/>
      </div>
    </>
  )
}

export default Layout



{/* Your Content/Components */}
