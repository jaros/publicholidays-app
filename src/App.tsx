import { useQuery } from "@apollo/client";
import React from "react";
import Select from "react-select";
import "./App.css";
import { allCountries } from "./countryCodes";
import {
  GetDateHolidays,
  GetDateHolidaysVariables,
  GetDateHolidays_dateHolidays,
} from "./graphql/operation-result-types";
import { GET_DATE_HOLIDAYS_QUERY } from "./graphql/query/GetDateHolidays";

const Holiday: React.FC<{ data: GetDateHolidays_dateHolidays }> = ({
  data,
}) => {
  return (
    <div className="formField">
      <div>
        <span>Date: &nbsp;</span>
        <span>{data.date}</span>
      </div>
      <div>
        <span>Name: &nbsp;</span>
        <span>{data.name}</span>
      </div>
      <div>
        <span>Local Name: &nbsp;</span>
        <span>{data.localName}</span>
      </div>
      <div>
        <span>Type: &nbsp;</span>
        <span>{data.type}</span>
      </div>
    </div>
  );
};

const Holidays: React.FC<{ year: number; country: string }> = ({
  year,
  country,
}) => {
  const { loading, error, data } = useQuery<
    GetDateHolidays,
    GetDateHolidaysVariables
  >(GET_DATE_HOLIDAYS_QUERY, {
    variables: { year, country },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data &&
        data.dateHolidays.map((data) => (
          <Holiday data={data} key={data.name + data.type} />
        ))}
    </div>
  );
};

function App() {
  const [year, setYear] = React.useState(2022);
  const [country, setCountry] = React.useState("US");
  const [searching, setSearching] = React.useState(false);

  const search = () => {
    console.log("clicked search", year, country);
    setSearching(true);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div style={{ paddingTop: 50 }}>
          <div>Public holidays for country by year</div>
          <div className="formField">
            <Select
              placeholder="Year"
              value={{ label: year, value: year }}
              options={allYears.map((year) => ({ value: year, label: year }))}
              onChange={(option) =>
                option ? setYear(option.value) : undefined
              }
            />
          </div>
          <div className="formField">
            <Select
              placeholder="Country"
              value={{ label: allCountries[country], value: country }}
              options={Object.entries(allCountries).map(([code, name]) => ({
                value: code,
                label: name,
              }))}
              onChange={(option) =>
                option ? setCountry(option.value) : undefined
              }
            />
          </div>
          <div className="formField">
            <button onClick={search}>Search!</button>
          </div>

          <div className="formField">
            {searching && <Holidays country={country} year={year} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const allYears = [2021, 2022, 2023];
