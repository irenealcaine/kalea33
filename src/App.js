import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          {/* <Route path='/legal' exact element={<Legal />} />
          <Route path='/cookies' exact element={<Cookies />} />
          <Route path='/privacy' exact element={<Privacy />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
