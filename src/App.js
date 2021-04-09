import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App container">
      <Header />
      <Navbar />
      <Carousel />
      <h1>Hola</h1>
      <Footer />
    </div>
  );
}

export default App;
