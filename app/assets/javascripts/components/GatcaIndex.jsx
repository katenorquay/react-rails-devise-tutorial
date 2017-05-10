var GatcaIndex = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Gatcas</h1>
        <table>
          <thead>
            <tr>
              <th colspan="3"></th>
            </tr>
          </thead>
          <tbody>
          {this.props.gatcas.map(function (gatca) {
            return (
              <tr>
                <td><a href='/gatcas'></a>Index</td>
                <td><a href='/gatca/edit(gatca)'>Edit</a></td>
                <td><a href='gatca/destroy(gatca)'>Destroy</a></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    )
  }
});
