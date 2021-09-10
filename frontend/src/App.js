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
import Cartscreen from "./Views/Cartscreen";
import Productscreen from "./Views/Productscreen";
import Loginscreen from "./Views/Loginscreen";
import Registerscreen from "./Views/Registerscreen";
import Profilescreen from "./Views/Profilescreen";
import Shippingscreen from "./Views/Shippingscreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <main className="p-3">
            <Route path="/login" component={Loginscreen} exact />
            <Route path="/product/:id" component={Productscreen} exact />
            <Route path="/cart/:id?" component={Cartscreen} exact />
            <Route path="/" component={Homescreen} exact />
            <Route path="/register" component={Registerscreen} exact />
            <Route path="/profile" component={Profilescreen} exact />
            <Route path="/shipping" component={Shippingscreen} exact />
          </main>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
