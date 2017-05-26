var Delete = React.createClass({

  handleDelete(e) {
    const { changePage, currentUser } = this.props
    e.preventDefault()
    $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/users",
      dataType: 'json',
      data: {user: { email: currentUser } },
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
      <button onClick={this.handleDelete}>Delete Account</button>
    )
  }
})
