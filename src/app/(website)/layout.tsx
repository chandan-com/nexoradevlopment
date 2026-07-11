import Navbar from "../../components/website/layout/Navbar";
import Footer from "@/src/components/website/layout/Footer";
import LoadingScreen from "./loading";
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
         
      </main>
    </LoadingScreen>
     <Footer/>
     </>
    
  );
}