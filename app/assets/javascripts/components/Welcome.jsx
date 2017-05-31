var Welcome = React.createClass({
  getInitialState: function() {
    return {
      page: "login",
      currentUser: null
    }
  },

  changePage: function(newPage) {
    this.setState({
      page: newPage
    });
  },

  updateCurrentUser: function(email) {
    this.setState({
      currentUser: email
    });
  },

  render: function() {
    switch(this.state.page) {
      case "login":
        return <Login changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>;
      case "signup":
        return <Signup changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>;
      case "edit":
        return <Edit changePage={this.changePage} currentUser={this.state.currentUser}/>;
    }
  }
});
