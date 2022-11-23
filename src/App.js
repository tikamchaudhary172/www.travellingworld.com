import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Service from './components/services/Service';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import BookNow from './components/bookNow/BookNow';
import News from './components/news/news';


function App() {
  return (
    <div>
        <Router>
          <Header />

            
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/news" element={<News />} />
                </Routes>
                <BookNow />
                <Login />
                <Footer />
                
      </Router>
      
    </div>
  );
}
// data-bs-toggle="modal" data-bs-target="#exampleModal"

export default App;
