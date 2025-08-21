import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "./components/Hero";
import Navbar from "./components/Nabvar";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      {/* <Art /> */}
      {/* <Menu /> */}
    </main>
  );
}

export default App;
