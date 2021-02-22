import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import AboutPage from "./pages/About";
import ContactmePage from "./pages/Contactme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contactme" component={ContactmePage} />
    </div>
  </BrowserRouter>,
  rootElement
);
