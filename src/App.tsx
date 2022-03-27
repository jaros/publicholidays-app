import React from "react";
import "./App.css";
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";
import {
  GetPublicHolidays,
  GetPublicHolidaysVariables,
} from "./graphql/operation-result-types";
import {GET_PUBLIC_HOLIDAYS_QUERY} from "./graphql/query/GetPublicHolidays";
import {allCountries} from "./countryCodes";

type HolidayType = {
  name: string;
  localName: string;
  date: string;
};

const Holiday: React.FC<HolidayType> = ({ name, localName, date }) => {
  return (
    <div className="formField">
      <div>
        <span>Date: &nbsp;</span>
        <span>{date}</span>
      </div>
      <div>
        <span>Name: &nbsp;</span>
        <span>{name}</span>
      </div>
      <div>
        <span>Local Name: &nbsp;</span>
        <span>{localName}</span>
      </div>
    </div>
  );
};


const Holidays: React.FC<{ year: number; country: string }> = ({
  year,
  country,
}) => {
  const { loading, error, data } = useQuery<
    GetPublicHolidays,
    GetPublicHolidaysVariables
  >(GET_PUBLIC_HOLIDAYS_QUERY, {
    variables: { year, country },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data &&
        data.publicHolidays.map(({ date, name, localName, types }) => (
          <Holiday
            date={date}
            name={name}
            localName={localName}
            key={name + types}
          />
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

