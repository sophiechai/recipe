// import logo from './logo.svg';
import './css/app.css';

import Header from "./components/Header";
import Route from "./components/Route";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="navMenu">
        <Header />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/recipes">
          <RecipePage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Footer />
      </div>
  );
}

export default App;
