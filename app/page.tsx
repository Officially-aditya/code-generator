import Header from "@/components/header";
import MainContent from "@/components/main-content";
import { Navbar } from "@/components/navbar";
import Test from "@/components/test"


export default function Home() {

  return (

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <MainContent />
          <Test />
        </div>
  );
}
