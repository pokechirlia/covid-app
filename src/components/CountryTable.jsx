import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

class CountryTable extends Component {
  render() {
    const {
      countries,
      onSortByTotalAsc,
      onSortByTotalDes,
      onSortByNameAsc,
      onSortByNameDes,
    } = this.props;
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>
              Country name&nbsp;
              <a href="/">
                <i class="bi bi-caret-up" onClick={onSortByNameAsc}></i>
              </a>
              &nbsp;
              <a href="/">
                <i class="bi bi-caret-down" onClick={onSortByNameDes}></i>
              </a>
            </th>
            <th>Last update</th>
            <th>
              Total cases&nbsp;
              <a href="/">
                <i class="bi bi-caret-up" onClick={onSortByTotalAsc}></i>
              </a>
              &nbsp;
              <a href="/">
                <i class="bi bi-caret-down" onClick={onSortByTotalDes}></i>
              </a>
            </th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country) => (
            //react prefer having a key for a list
            <tr key={country.name}>
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
