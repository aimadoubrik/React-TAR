import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMI from "./EX3/BMI";
import Navbar from "./Navbar";
import ListArticle from "./EX4/components/articalList";
import AddEditArticle from "./EX4/components/articalForm";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BMI />} />
          <Route path="/storeredux" element={<ListArticle />} />
          <Route path="/add" element={<AddEditArticle />} />
          <Route path="/edit/:id" element={<AddEditArticle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
