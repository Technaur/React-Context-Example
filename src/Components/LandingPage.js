import React, { Component } from "react";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import { UserProvider, UserConsumer } from "./../Context/UserContext";

class LandingPage extends Component {
  render() {
    return (
      <UserProvider>
        <UserConsumer>
          {({ currentUser }) => (
            <div>{currentUser ? <MainPage /> : <LoginPage />}</div>
          )}
        </UserConsumer>
      </UserProvider>
    );
  }
}

export default LandingPage;
