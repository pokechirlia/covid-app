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
      const countryName = row[0];
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
        {allTotal === 0 ? <Loading /> : <CountryTable countries={countries} />}
      </div>
    );
  }
}

export default Covid;
