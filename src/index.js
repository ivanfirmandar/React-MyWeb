import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
    </div>
  </BrowserRouter>,
  rootElement
);
