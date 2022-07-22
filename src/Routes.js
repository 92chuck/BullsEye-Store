import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Allsnacks from "./components/Allsnacks/Allsnacks";
import MyAccount from "./components/MyAccount/MyAccount";
import Checkout from "./components/Checkout/Checkout";
import SingleSnack from "./components/Allsnacks/SingleSnack/SingleSnack";
import { me } from "./store";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  //test

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {!isLoggedIn ? (
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/allsnacks' component={Allsnacks} />
            <Route exact path='/myaccount' component={MyAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='./allsnacks/:id' component={SingleSnack} />
          </Switch>
        ) : null}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
