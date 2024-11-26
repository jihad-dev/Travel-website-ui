
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Home />
      <Destinations />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;