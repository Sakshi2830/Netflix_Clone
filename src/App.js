import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {
const user = null;

useEffect(() =>{
 const unsubscribe= auth.onAuthStateChanged((userAuth) => {
    if(userAuth) {
      //logged In
      console.log(userAuth);
    }else{
      //logged Out
    }
  })
  return unsubscribe
},[])

  return (
    <div className="app">  
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route exact path="/">
          <HomeScreen/>
          </Route>
        </Switch>
    
    
      )}
      </Router>
      </div>
  )
}

export default App;
