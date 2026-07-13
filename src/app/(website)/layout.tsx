
// import LiveChat from "@/src/components/website/chat/LiveChat";
import Navbar from "../../components/website/layout/Navbar";

import LoadingScreen from "./loading";
import Footer from "@/src/components/website/layout/Footer";


export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    
      <Navbar />
      
      <LoadingScreen>
      <main className=" bg-background text-foreground">
        {children}
         {/* <LiveChat/> */}
      </main>
    </LoadingScreen>
     <Footer/>
     </>
    
  );
}