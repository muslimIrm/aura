import { TabsDemo } from "./components/tabs/tabs";
import Container from "./components/container";
import Footer from "./components/footer";
export default function Home() {
  
  return (
    <div className=" relative w-screen h-screen flex items-center overflow-hidden justify-center flex-col">
      <Container className="flex items-center justify-center flex-col">

        <h1 className="font-sans font-bold mb-2 text-center text-2xl">Welcome in AURA</h1>

        <TabsDemo />
        <Footer/>
      </Container>
    </div>
  );
}
