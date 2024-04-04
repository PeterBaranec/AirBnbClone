import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        rating="5"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"
      />
    </>
  );
}

export default App;
