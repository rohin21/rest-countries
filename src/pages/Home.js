import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const request = await fetch("https://restcountries.com/v3.1/region/asia");
    const data = await request.json();

    if (data) {
      setCountries(data);
    } else {
      alert("Server Error.");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {countries.map((country, index) => {
            let {
              name,
              flags,
              capital,
              region,
              subregion,
              languages,
              borders,
              population,
            } = country;
            if (borders === undefined) {
              borders = ["N/A"];
            }
            return (
              <div className="col mt-3 mb-3">
                <Card
                  key={index}
                  name={name.official}
                  flag={flags.png}
                  capital={capital}
                  region={region}
                  subRegion={subregion}
                  population={population}
                  languages={Object.values(languages)}
                  border={borders}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
