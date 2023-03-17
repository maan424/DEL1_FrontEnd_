import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';


const App = () => {
   const [sideToggle,setSideToggle] = useState(false)
   return (
      <Router>
         <Navbar click={() => setSideToggle(true)}/>
         <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
         <SideDrawer show={sideToggle}/>
         <main>  
            <Switch>
               <Route exact path='/' component={HomeScreen}/>
               <Route exact path='/product/:id' component={ProductScreen}/>
               <Route exact path='/cart' component={CartScreen }/>
            </Switch>
         </main>
      </Router>
   );
}

export default App;
