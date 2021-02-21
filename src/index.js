import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/portofolio" component={HomePage} />
      <Route path="/about" component={HomePage} />
      <Route path="/pricing" component={HomePage} />
      <Route path="/contactus" component={HomePage} />
    </div>
  </BrowserRouter>,
  rootElement
);
