var Signup = React.createClass({
  getInitialState: function() {
    return {
      signupUnsuccessful: false
    };
  },

  handleSignup(e) {
    e.preventDefault();
    var that = this;
    var userInfo = {
      user: {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        password_confirmation: document.getElementById("password_confirmation").value
      }
    }
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/users",
      dataType: "json",
      data: userInfo,
      error: function (error) {
        that.updateSignupError()
      },
      success: function (res) {
        that.props.changePage("edit");
        that.props.updateCurrentUser(res.email);
      },
    });
  },

  updateSignupError() {
    this.setState({
      signupUnsuccessful: true
    });
  },

  render: function() {
    var errorClass = this.state.signupUnsuccessful ? "" : "hidden"
    return (
      <div>
        <h2>Signup</h2>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <input id="password_confirmation" placeholder="retype password"/>
          <button onClick={this.handleSignup}>Submit</button>
        </form>
        <p className={errorClass}>There was an error with your signup details</p>
        <button onClick={() => this.props.changePage("login")}>Login!</button>
      </div>
    );
  };
});
