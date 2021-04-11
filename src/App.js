import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App container-fluid p-0">
      <Header />
      <Navbar />
      <Carousel />
      <h1 className="text-center">-Aca iría todo el contenido-</h1>
      <Footer />
    </div>
  );
}

export default App;
