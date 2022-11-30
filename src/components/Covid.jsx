import React, { Component } from "react";
import Loading from "./Loading";
import axios from "axios"; // used to make http request
import CountryTable from "./CountryTable";

class Covid extends Component {
  state = {
    countries: [],
    allTotal: 0,
  };
  url =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  //called after component is rendered
  async componentDidMount() {
    const response = await axios.get(this.url);
    const rows = response.data.split("\n");

    const countries = [];
    let allTotal = 0;

    for (let i = 1; i < rows.length; i++) {
      //for commas that are outside the quotes ("Korea, South" does not count)
      const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      const countryName = row[0].replace(/"/g, "");
      const lastUpdate = row[1];
      const total = Number(row[4]);
      if (countryName !== "") {
        countries.push({
          name: countryName,
          lastUpdate: lastUpdate,
          total: total,
        });
        allTotal += total;
      }
    }

    //await new Promise((x) => setTimeout(x, 1000)); //wait 1 sec then load

    // this.setState({ countries: countries, allTotal: allTotal });
    //if state attributes and variables have the same name, can use this
    this.setState({ countries, allTotal });

    // console.table(countries);
    // console.log(allTotal);
  }

  sortByTotalAsc = (countryA, countryB) => {
    if (countryA.total < countryB.total) return -1;
    else if (countryA.total == countryB.total) return 0;
    else return 1;
  };

  handleSortByTotalAsc = (event) => {
    this.handleSortBy(event, this.sortByTotalAsc, true);
  };

  handleSortByTotalDes = (event) => {
    this.handleSortBy(event, this.sortByTotalAsc, false);
  };

  sortByNameAsc = (countryA, countryB) => {
    if (countryA.name < countryB.name) return -1;
    else if (countryA.name == countryB.name) return 0;
    else return 1;
  };

  handleSortByNameAsc = (event) => {
    this.handleSortBy(event, this.sortByNameAsc, true);
  };

  handleSortByNameDes = (event) => {
    this.handleSortBy(event, this.sortByNameAsc, false);
  };

  handleSortBy = (event, sortOperation, isAsc) => {
    event.preventDefault(); //stop the page from being refreshed
    const countries = [...this.state.countries]; //making a copy
    countries.sort(sortOperation);
    if (!isAsc) countries.reverse();
    this.setState({ countries });
  };

  //make the big number looks good
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { countries, allTotal } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          All country total: {this.numberWithCommas(allTotal)}
        </h1>
        <h4 style={{ textAlign: "center" }}>
          According to Johns Hopkins data source
        </h4>
        {allTotal === 0 ? (
          <Loading />
        ) : (
          <CountryTable
            countries={countries}
            onSortByTotalAsc={this.handleSortByTotalAsc}
            onSortByTotalDes={this.handleSortByTotalDes}
            onSortByNameAsc={this.handleSortByNameAsc}
            onSortByNameDes={this.handleSortByNameDes}
          />
        )}
      </div>
    );
  }
}

export default Covid;
