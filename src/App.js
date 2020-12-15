import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Covid from "./components/Covid";
import Brexit from "./components/Brexit";
import CovidHome from "./components/CovidComponents/Home";
import BrexitHome from "./components/BrexitComponents/Home";
import CovidAbout from "./components/CovidComponents/About";
import BrexitAbout from "./components/BrexitComponents/About";
import CovidDonate from "./components/CovidComponents/Donate";
import BrexitDiscuss from "./components/BrexitComponents/Discuss";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Covid" component={Covid} />
        <Route path="/Covid/home" component={CovidHome} />
        <Route path="/Covid/about" component={CovidAbout} />
        <Route path="/Covid/donate" component={CovidDonate} />
        <Route path="/Brexit" component={Brexit} />
        <Route path="/Brexit/home" component={BrexitHome} />
        <Route path="/Brexit/about" component={BrexitAbout} />
        <Route path="/Brexit/blog" component={BrexitDiscuss} />
      </Switch>
    </main>
  );
}

export default App;
