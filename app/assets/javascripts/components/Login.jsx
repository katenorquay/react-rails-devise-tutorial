var Login = React.createClass({

  handleLogin(e) {
    e.preventDefault()
    const { changePage, updateCurrentUser } = this.props
    var userInfo = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/users/sign_in",
      dataType: 'json',
      data: userInfo,
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        changePage('edit')
        updateCurrentUser(res.email)
      },
    })
  },

  render: function() {
    const { changePage } = this.props
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input id='email' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <button onClick={this.handleLogin}>Submit</button>
          <button onClick={() => changePage('signup')}>Sign Up!</button>
        </form>
      </div>
    )
  }
});
