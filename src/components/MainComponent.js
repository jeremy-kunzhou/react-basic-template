import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { postFeedback, fetchCountriesByRegion } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { useSelector, useDispatch } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../scss/App.scss";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import { Loading } from "./utils/LoadingComponent";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Favorites = (props) => {
  return <Loading />;
};

let Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesByRegion("eu"));
  }, [dispatch]);

  const auth = useSelector((state) => state.auth);
  const resetFeedbackForm = () => {
    dispatch(actions.reset("feedback"));
  };
  const postFeedbackForm = (value) => {
    dispatch(postFeedback(value));
  };
  return (
    <div>
      <Header auth={auth} />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch>
            <Route path="/home" component={Home} />
            <PrivateRoute exact path="/favorites" component={Favorites} />
            <Route
              exact
              path="/contactus"
              component={() => (
                <Contact
                  resetFeedbackForm={resetFeedbackForm}
                  postFeedback={postFeedbackForm}
                />
              )}
            />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default withRouter(Main);
