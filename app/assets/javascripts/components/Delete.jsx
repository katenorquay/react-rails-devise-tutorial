var Delete = React.createClass({

  handleDelete(e) {
    const { changePage, updateDeleteError, currentUser } = this.props
    e.preventDefault()
    $.ajaxSetup({
       headers:
       { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });
    $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/users",
      dataType: 'json',
      data: {user: { email: currentUser } },
      error: function (error) {
        updateDeleteError()
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
