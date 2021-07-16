import React from "react";

const { Provider, Consumer } = React.createContext();
// Context.Consumer, Context.Provider

class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  handleLogin = (user) => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    const { currentUser } = this.state;

    return (
      <Provider
        value={{
          currentUser,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };
