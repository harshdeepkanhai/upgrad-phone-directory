import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PhoneDirectory from './components/PhoneDirectory';
import AddPhone from './components/AddPhone';
import { Provider } from "react-redux";
import store from "./store.js";


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Route exact path='/' render={(props)=> <Header {...props} title={"Phone Directory"}/>} />
    <Route path='/addPhone' render={(props)=> <Header {...props} title={"Add Phone"}/>} />
    <Route exact path='/' component={PhoneDirectory} />
    <Route path='/addPhone' component={AddPhone} />

      
    </div>
    </Router>
    </Provider>
  );
}

export default App;
