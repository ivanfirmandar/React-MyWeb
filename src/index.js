import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import PortofolioPage from "./pages/Portofolio";
import AboutPage from "./pages/About";
import ContactmePage from "./pages/Contactme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/portofolio" component={HomePage} />
      <Route path="/about" component={HomePage} />
      <Route path="/contactme" component={HomePage} />
    </div>
  </BrowserRouter>,
  rootElement
);
