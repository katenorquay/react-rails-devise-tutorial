var Login = React.createClass({
  getInitialState: function() {
    return {
      loginUnsuccessful: false
    };
  },

  handleLogin(e) {
    e.preventDefault();
    var that = this;
    var userInfo = {
      user: {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      }
    };
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/users/sign_in",
      dataType: "json",
      data: userInfo,
      error: function(error) {
        that.updateLoginError();
      },
      success: function(res) {
        that.props.changePage("edit");
        that.props.updateCurrentUser(res.email);
      }
    });
  },

  updateLoginError() {
    this.setState({
      loginUnsuccessful: true
    });
  },

  render() {
    var errorClass = this.state.loginUnsuccessful ? "" : "hidden";
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input id="email" placeholder="email" />
          <input id="password" placeholder="password" />
          <button onClick={this.handleLogin}>Submit</button>
        </form>
        <p className={errorClass}>There was an error with your login details</p>
        <button onClick={() => this.props.changePage("signup")}>
          Sign Up!
        </button>
      </div>
    );
  }
});
