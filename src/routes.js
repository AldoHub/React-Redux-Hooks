import React from "react";
import { Switch, Route} from "react-router-dom";

//import the components
import Main from "./components/main";
import Tech from "./components/tech";

const Routes = () => (
   
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/tech" component={Tech} />
        </Switch>
       
) 

export default Routes;