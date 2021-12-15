import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

import {BrowserRouter , Switch , Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />
   <Redirect to ="/home" />
    </Switch>
    <Footer />
    </BrowserRouter>

  
    
    </>
  );
}

export default App;
