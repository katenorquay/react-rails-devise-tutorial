var Logout = React.createClass({
  handleLogout(e) {
    e.preventDefault();
    var that = this;
    $.ajax({
      type: "Delete",
      url: "http://localhost:3000/users/sign_out",
      dataType: "json",
      error: function(error) {
        console.log(error);
      },
      success: function(res) {
        that.props.changePage("login");
      }
    });
  },

  render: function() {
    return <button onClick={this.handleLogout}>Sign Out</button>;
  }
});
