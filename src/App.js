import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import SignUp from './components/Signin/SignUp/SignUp';
import Signin from './components/Signin/SignIn/Signin';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './components/contexts/AuthProvider';
import FoodDetail from './components/Home/FoodDetail/FoodDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/signin">
            <Signin></Signin>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute exact path="/foodDetail/:foodId">
            <FoodDetail></FoodDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
