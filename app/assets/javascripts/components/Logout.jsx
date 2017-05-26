var Logout = React.createClass({

  handleLogout(e) {
    const { changePage } = this.props
    e.preventDefault()
    $.ajax({
      type: "Delete",
      url: "http://localhost:3000/users/sign_out",
      dataType: 'json',
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        changePage('login')
        
      },
    })
  },

  render: function() {
    return (
      <button onClick={this.handleLogout}>Sign Out</button>
    )
  }
})
