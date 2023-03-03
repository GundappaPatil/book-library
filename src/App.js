import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Auth from "./components/Auth";
// import Dashboard from "./components/Dashboard";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Book from "./components/Book";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/List/:id" element={<Book />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
