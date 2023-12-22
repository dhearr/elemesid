import Category from "./components/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <nav className="bg-white overflow-hidden fixed w-full z-20 top-0 start-0">
        <Navbar />
      </nav>
      <section className="bg-white">
        <div className="bg-hero-pattern mix-blend-multiply bg-cover overflow-hidden">
          <Hero />
        </div>
      </section>
      <section className="bg-white py-16">
        <Category />
      </section>
      <section className="bg-white py-16">
        <Trending />
      </section>
      <section className="bg-white py-16">
        <Footer />
      </section>
    </>
  );
}

export default App;
