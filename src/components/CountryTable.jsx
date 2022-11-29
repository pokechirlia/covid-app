import React, { Component } from "react";

class CountryTable extends Component {
  render() {
    const { countries } = this.props;
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Country name</th>
            <th>Last update</th>
            <th>Total cases</th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country) => (
            <tr>
              <td>{country.name}</td>
              <td>{country.lastUpdate}</td>
              <td>{country.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CountryTable;
