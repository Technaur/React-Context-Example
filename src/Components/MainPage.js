import React, { Component } from "react";
import { Button, Header, Message } from "semantic-ui-react";
import { UserConsumer } from "./../Context/UserContext";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <UserConsumer>
        {({ currentUser, onLogout }) => (
          <div>
            <Header>Main</Header>
            <Message>
              <Message.Header>Welcome, {currentUser}</Message.Header>
            </Message>
            <Button onClick={onLogout}>Logout</Button>
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default MainPage;
