import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom'
import Module23 from './components/module23/Module23.js';
function App() {
  return (
    <div className="Gop">
      <BrowserRouter > 
          <Module23/>
      </BrowserRouter>
    </div>
  );
}

export default App;
