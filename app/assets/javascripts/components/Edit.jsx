var Edit = React.createClass({
  getInitialState: function() {
    return {
      editSuccessful: null,
      deleteUnsuccessful: false
    };
  },

  handleUpdate(e) {
    e.preventDefault();
    var that = this;
    var userInfo = {
      user: {
        email: that.props.currentUser,
        password: document.getElementById("newPassword").value,
        password_confirmation: document.getElementById("confirmNewPassword")
          .value
      }
    };
    $.ajaxSetup({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") }
    });
    $.ajax({
      type: "PUT",
      url: "http://localhost:3000/users",
      dataType: "json",
      data: userInfo,
      error: function(error) {
        that.updateEdit("false");
      },
      success: function(res) {
        that.updateEdit("true");
      }
    });
  },

  updateEdit(string) {
    this.setState({
      editSuccessful: string
    });
  },

  updateDeleteError() {
    this.setState({
      deleteUnsuccessful: true
    });
  },

  getEditData() {
    var customClass = "hidden";
    var message = "";
    switch (this.state.editSuccessful) {
      case "true":
        message = "Password successfully updated";
        customClass = "";
        break;
      case "false":
        message = "There was an error updating your password";
        customClass = "";
        break;
    }
    return { message: message, customClass: customClass };
  },

  render: function() {
    var errorClass = this.state.deleteUnsuccessful ? "" : "hidden";
    var editData = this.getEditData();
    return (
      <div>
        <h2>Edit Account</h2>
        <form>
          <input id="newPassword" placeholder="new password" />
          <input id="confirmNewPassword" placeholder="retype new password" />
          <button onClick={this.handleUpdate}>Submit</button>
        </form>
        <p className={editData.customClass}>{editData.message}</p>
        <Logout changePage={this.props.changePage} />
        <Delete
          changePage={this.props.changePage}
          updateDeleteError={this.updateDeleteError}
          currentUser={this.props.currentUser}
        />
        <p className={errorClass}>Your account could not be deleted</p>
      </div>
    );
  }
});
