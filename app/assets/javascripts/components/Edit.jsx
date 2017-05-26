var Edit = React.createClass({

  handleUpdate(e) {
  e.preventDefault()
  const userInfo = {
    user: {
      email: this.props.currentUser,
      password: document.getElementById('newPassword').value,
      password_confirmation: document.getElementById('confirmNewPassword').value,
    }
  }
  $.ajax({
    type: "PUT",
    url: "http://localhost:3000/users",
    dataType: 'json',
    data: userInfo,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res)
    },
  })
},

  render: function() {
    const { changePage, currentUser} = this.props
    return (
      <div>
        <h2>Edit Account</h2>
        <form>
          <input id='newPassword' placeholder=' new password'/>
          <input id='confirmNewPassword' placeholder='retype new password'/>
          <button onClick={this.handleUpdate}>Submit</button>
        </form>
        <Logout changePage={changePage}/>
        <Delete changePage={changePage} currentUser={currentUser}/>
      </div>
    )
  }
})
