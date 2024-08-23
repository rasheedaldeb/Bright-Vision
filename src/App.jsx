import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
function App() {
  return (
    <>
      <NavBar
        menu={[
          { link: "home", path: "/", iconClass: "fa-solid fa-house-user" },
          {
            link: "about Us",
            path: "/about",
            iconClass: "fa-solid fa-address-card",
          },
          {
            link: "our professional work",
            path: "/work",
            iconClass: "fa-solid fa-building",
          },
          {
            link: "contact us",
            path: "/contact",
            iconClass: "fa-solid fa-address-book",
          },
        ]}
        btn="Send Us A Message"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
