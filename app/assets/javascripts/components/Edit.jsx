var Edit = React.createClass({
  getInitialState: function() {
    return {
      editSuccessful: null,
      deleteUnsuccessful: false
    }
  },

  handleUpdate(e) {
    e.preventDefault()
    const that = this
    const userInfo = {
      user: {
        email: this.props.currentUser,
        password: document.getElementById('newPassword').value,
        password_confirmation: document.getElementById('confirmNewPassword').value,
      }
    }
    $.ajaxSetup({
       headers:
       { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });
    $.ajax({
      type: "PUT",
      url: "http://localhost:3000/users",
      dataType: 'json',
      data: userInfo,
      error: function (error) {
        that.updateEdit(false)
      },
      success: function (res) {
        that.updateEdit(true)
      },
    })
  },

  updateEdit(bool) {
    this.setState({
      editSuccessful: bool
    })
  },

  updateDeleteError() {
    this.setState({
      deleteUnsuccessful: true
    })
  },

  render: function() {
    const { changePage, currentUser} = this.props
    const errorClass = this.state.deleteUnsuccessful ? '' : 'hidden'
    var customClass = 'hidden'
    var message = ''
    if (this.state.editSuccessful) {
      message = 'Password successfully updated'
      customClass = ''
    } else if (this.state.editSuccessful == false) {
      message = 'There was an error updating your password'
      customClass = ''
    }
    return (
      <div>
        <h2>Edit Account</h2>
        <form>
          <input id='newPassword' placeholder=' new password'/>
          <input id='confirmNewPassword' placeholder='retype new password'/>
          <button onClick={this.handleUpdate}>Submit</button>
        </form>
        <p className={customClass}>{message}</p>
        <Logout changePage={changePage}/>
        <Delete changePage={changePage} updateDeleteError={this.updateDeleteError} currentUser={currentUser}/>
        <p className={errorClass}>Your account could not be deleted</p>
      </div>
    )
  }
})
