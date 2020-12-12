import Components from './components/components';
import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
         <div className="App">
            <Components />
         </div>
   </BrowserRouter>
  );
}

export default App;
