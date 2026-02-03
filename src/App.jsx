import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Book } from "./pages/Book";
import { BookConf } from "./pages/BookConf";
import { Rooms } from "./pages/Rooms";
import { Dining } from "./pages/Dining";
import { Payment } from './pages/Payment';
import { ReserveTable } from './pages/ReserveTable';
import { Spa } from './pages/Spa';
import { SideMenu } from './components/SideMenu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Description } from './pages/Description';
import { Profile } from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Default route */}
        <Route path="/home" element={<Home />} />      {/* Home route */}
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Book />} />
        <Route path="/booking-confirmation" element={<BookConf />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/reservetable' element={<ReserveTable/>}/>
        <Route path='/spa' element={<Spa/>} />
        <Route path='/sidemenu' element={<SideMenu/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/description" element={<Description />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App
