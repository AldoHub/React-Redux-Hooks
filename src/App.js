import React from 'react';

//image
import image from "../src/836 [Converted].svg";

import Store from "./store/store";
import {Provider} from "react-redux";

import {Link} from "react-router-dom";
//routes
import Routes from "./routes";

function App() {
  return (
    <Provider store={Store}>

      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">ReactReduxHooks</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/tech">Tech</Link></li>
          </ul>
        </nav>
        <header>
          <h1>React Redux Hooks</h1>
          <img src={image} />
        </header>
    

        <main>
          <Routes />
        </main>

      </div>
    </Provider>

  );
}

export default App;
