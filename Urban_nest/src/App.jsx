import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './assets/components/Nav';
import Mainpage from './Mainpage';
import Login from './assets/components/Login';
import './App.css';
import Book_rooms from './assets/components/Book_rooms';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/book-room" element = {<Book_rooms  />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
