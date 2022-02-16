import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import RegisterPage from "./components/pages/registerPage";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
