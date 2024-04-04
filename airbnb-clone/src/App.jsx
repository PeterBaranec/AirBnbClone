import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import photo from "./assets/katie-zaferes.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img={photo}
        rating="5"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}

export default App;
