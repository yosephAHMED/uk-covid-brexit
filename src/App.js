import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Covid from "./components/Covid";
import Brexit from "./components/Brexit";
import CovidAbout from "./components/CovidComponents/About";
import BrexitAbout from "./components/BrexitComponents/About";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Covid" component={Covid} exact />
        <Route path="/Covid/about" component={CovidAbout} />
        <Route path="/Brexit" component={Brexit} exact />
        <Route path="/Brexit/about" component={BrexitAbout} />
      </Switch>
    </main>
  );
}

export default App;
