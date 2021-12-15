import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "config/routes";
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => (
  <Provider store={store} >    
     <BrowserRouter>
       <Routes />
     </BrowserRouter>
  </Provider>
);
export default App;
