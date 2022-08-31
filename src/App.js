import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/NavBar";
import Treatment from "./pages/treatment/treatment";
import About from "./pages/aboutus/about";
import Academy from "./pages/academy/academy";
import Home from "./pages/home/home";
import Form from "./components/sidebar/form";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />

        <Switch>
          <Route path="/Academy" component={Academy} />
          <Route path="/treatment" component={Treatment} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
        </Switch>

        <Footer />
        <Form />
      </div>
    );
  }
}

export default App;
