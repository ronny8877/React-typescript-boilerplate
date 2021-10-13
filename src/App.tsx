/** @format */

import React, { Suspense } from "react";
import { Route, Switch } from "react-router";

//imported components
import Loading from "./components/common/Loading";

//Lazy imports
const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));

function App() {
  return (
    <div>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
