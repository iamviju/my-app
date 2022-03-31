
import './App.css';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Blog from './component/pages/Blog';
import Contact from './component/pages/Contact';
function App() {
  return (
    <>
      <Router>
     {/* <HeaderComponent /> */}
     <Navbar/>

      <div className="pages">
        <Routes>
          <Route exact path="/" element = {<ListEmployeeComponent />}></Route>
          <Route path="/employees" element = {<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element = {<AddEmployeeComponent />}></Route>
          <Route path="/edit-employee/:id" element = {<AddEmployeeComponent />}></Route>
          <Route path="/home" element = {<Home />}></Route>
          <Route path="/about" element = {<About />}></Route>
          <Route path="/blog" element = {<Blog />}></Route>
          <Route path="/contact" element = {<Contact />}></Route>

        </Routes>
        
      </div>
     { /*<FooterComponent /> */}

      </Router>
  
    </>
  );
}

export default App;
