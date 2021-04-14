import './App.css';
import Benefits from './components/Benefits/Benefits';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Footer/Header/Header';
import Lauching from './components/Lauching/Lauching';
import LauchingV2 from './components/LauchingV2/LauchingV2';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App container-fluid p-0">
      <Header />
      <Navbar />
      <Carousel />
      <Lauching />
      <Benefits />
      <Footer />
      <h1 className="my-5 py-5 text-center">Pagina V2</h1>
      <Header />
      <Navbar />
      <Carousel />
      <LauchingV2 />
      <Footer />
    </div>
  );
}

export default App;
