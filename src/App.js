import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Components/Context/AuthProvider';
import Header from './Components/Header/Header';
import LogIn from './Components/Pages/LogIn/LogIn';
import PrivetRoute from './Components/Pages/LogIn/PrivetRouter/PrivetRouter';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import NotFound404 from './Components/Pages/NotFound/NotFound404';
import Contact from './Components/Pages/Contact/Contact';
import AddSpot from './Components/Pages/Home/Places/AddSpot/AddSpot';
import ManageBooking from './Components/Pages/ManageBooking/ManageBooking';
import MyOrder from './Components/Pages/MyOrder/MyOrder';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route exat path="/home">
            <Home></Home>
          </Route>
          <Route path="/addspot">
            <AddSpot></AddSpot>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          {/* <PrivetRoute path="/placeorder/:serviceId">
          <PlaceOrder></PlaceOrder>
          </PrivetRoute> */}
          <Route path="/placeorder/:placeId">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/myorder/:email">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
          <NotFound404></NotFound404>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
  );
}

export default App;
