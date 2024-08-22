import "./App.css";
import NavBar from "./Components/NavBar";

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
    </>
  );
}

export default App;
