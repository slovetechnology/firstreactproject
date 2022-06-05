import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './contacts/Contact'
import Home from './pages/Home';
import Footer from './pages/Footer';


function App() {
  return (
    <Router>
    <div>
      <div className="p-3 bg-dark d-flex allign-items-center justify-content-between navdivs">
        <Link to="/" className="brand no-text text-capitalize h3">crud application</Link>
        <div className="d-flex align-items-center">
          <Link to="/contact" className="linktext">contacts</Link>
        </div>
      </div>
      <br /> <br /> <br />
      <div className="text-center"><img src="./logo192.png" alt="react logo" className="complogo" />
        <div className="text-muted">Powered By React</div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
