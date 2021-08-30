import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <main className="p-3">
            <Route path="/" component={Homescreen} exact />
            <Route path="/product/:id" component={Productscreen} exact />
          </main>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
