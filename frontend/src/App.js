//Import style and elements
import "./App.css";
import { Container } from "react-bootstrap";
//Import Router
import { BrowserRouter as Router, Route } from "react-router-dom";
//Import Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//Import Views
import Homescreen from "./Views/Homescreen";
import Productscreen from "./Views/Productscreen";

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
