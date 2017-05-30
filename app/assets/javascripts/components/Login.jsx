var Login = React.createClass({
  getInitialState: function() {
    return {
      loginUnsuccessful: false
    }
  },

  handleLogin(e) {
    e.preventDefault()
    const { changePage, updateCurrentUser } = this.props
    const that = this
    var userInfo = {
      user: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    }
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/users/sign_in",
      dataType: 'json',
      data: userInfo,
      error: function (error) {
        that.updateLoginError()
      },
      success: function (res) {
        console.log(res)
        changePage('edit')
        updateCurrentUser(res.email)
      },
    })
  },

  updateLoginError() {
    this.setState({
      loginUnsuccessful: true
    })
  },

  render() {
    const errorClass = this.state.loginUnsuccessful ? '' : 'hidden'
    const { changePage } = this.props
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input id='email' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <button onClick={this.handleLogin}>Submit</button>
        </form>
        <p className={errorClass}>There was an error with your login details</p>
        <button onClick={() => changePage('signup')}>Sign Up!</button>
      </div>
    )
  }
});
