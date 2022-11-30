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
      onRowSelected,
    } = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              Country name&nbsp;
              <a href="/">
                <i className="bi bi-caret-up" onClick={onSortByNameAsc}></i>
              </a>
              &nbsp;
              <a href="/">
                <i className="bi bi-caret-down" onClick={onSortByNameDes}></i>
              </a>
            </th>
            <th>Last update</th>
            <th>
              Total cases&nbsp;
              <a href="/">
                <i className="bi bi-caret-up" onClick={onSortByTotalAsc}></i>
              </a>
              &nbsp;
              <a href="/">
                <i className="bi bi-caret-down" onClick={onSortByTotalDes}></i>
              </a>
            </th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country) => {
            const style = {
              backgroundColor: "lightblue",
            };

            return (
              //react prefer having a key for a list
              <tr
                style={country.selected ? style : null}
                key={country.name}
                onClick={() => onRowSelected(country)}
              >
                <td>{country.name}</td>
                <td>{country.lastUpdate}</td>
                <td>{country.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CountryTable;
