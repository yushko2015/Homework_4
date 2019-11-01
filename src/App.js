import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReviewsPAge from "./pages/ReviewsPage";
import { routes } from "./routes";
import "./styles.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ReviewPage from "./pages/ReviewPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <section className="content">
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route path={routes.SHOP} component={ShopPage} />
          <Route path={routes.SHOP} component={ShopPage} />
          <Route path={routes.REVIEWS} component={ReviewsPAge} />
          <Route path={routes.REVIEW + "/:reviewId"} component={ReviewPage} />
        </Switch>
      </section>
    </BrowserRouter>
  );
};

export default App;
