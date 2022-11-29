import React, { Component } from "react";

class CountryTable extends Component {
  render() {
    const { countries } = this.props;
    return (
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>C</th>
            <th>T</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default CountryTable;
