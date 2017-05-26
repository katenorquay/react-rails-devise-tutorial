var Signup = React.createClass({

  handleSignup(e) {
    const { changePage, updateCurrentUser } = this.props
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
        <h2>Signup</h2>
        <form>
          <input id='email' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <input id='password_confirmation' placeholder='retype password'/>
          <button onClick={this.handleSignup}>Submit</button>
          <button onClick={() => changePage('login')}>Login!</button>
        </form>
      </div>
    )
  }
});
