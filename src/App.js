import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Covid from "./components/Covid";
import Brexit from "./components/Brexit";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Covid" component={Covid} />
        <Route path="/Brexit" component={Brexit} />
      </Switch>
    </main>
  );
}

export default App;
