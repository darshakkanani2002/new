import './App.css';

import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";
import Nav from './component/Nav';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Export from './component/Export';
import Error from './component/Error';
import Faq from './component/Faq';
import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route>
            <Route path='blog' element={<Blog></Blog>}></Route>
            <Route path='export' element={<Export></Export>}></Route>
            <Route path='404' element={<Error></Error>}></Route>
            <Route path='faq' element={<Faq></Faq>}></Route>
          </Routes>
        <Footer></Footer>        
      </Router>
    </div>
  );
}


