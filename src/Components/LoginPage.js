import React, { Component } from "react";
import { Button, Divider, Header, Input } from "semantic-ui-react";
import { UserConsumer } from "./../Context/UserContext";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }
  render() {
    const { username } = this.state;

    return (
      <UserConsumer>
        {({ onLogin }) => (
          <div className={"LoginContainer"}>
            <Header>Login</Header>
            <Input
              placeholder={"Username"}
              value={username}
              onChange={(e, d) => {
                this.setState({ username: d.value });
              }}
            />
            <Divider />
            <Button primary onClick={() => onLogin(username)}>
              Login
            </Button>
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default LoginPage;
