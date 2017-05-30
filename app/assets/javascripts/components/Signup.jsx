var Signup = React.createClass({
  getInitialState: function() {
    return {
      signupUnsuccessful: false
    }
  },

  handleSignup(e) {
    const { changePage, updateCurrentUser } = this.props
    const that = this
    e.preventDefault()
    var userInfo = {
      user: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        password_confirmation: document.getElementById('password_confirmation').value
      }
    }
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/users",
      dataType: 'json',
      data: userInfo,
      error: function (error) {
        that.updateSignupError()
      },
      success: function (res) {
        console.log(res)
        changePage('edit')
        updateCurrentUser(res.email)
      },
    })
  },

  updateSignupError() {
    this.setState({
      signupUnsuccessful: true
    })
  },

  render: function() {
    const errorClass = this.state.signupUnsuccessful ? '' : 'hidden'
    const { changePage } = this.props
    return (
      <div>
        <h2>Signup</h2>
        <form>
          <input id='email' ref='email' placeholder='email'/>
          <input id='password' ref='password' placeholder='password'/>
          <input id='password_confirmation' ref='password_confirmation' placeholder='retype password'/>
          <button onClick={this.handleSignup}>Submit</button>
        </form>
        <p className={errorClass}>There was an error with your signup details</p>
        <button onClick={() => changePage('login')}>Login!</button>
      </div>
    )
  }
});
