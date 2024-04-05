import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import data from "./data.js";

function App() {
  const cards = data.map((data) => {
    return (
      <Card
        key={data.id}
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
