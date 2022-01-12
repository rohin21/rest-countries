import React from "react";
import Badge from "./Badge";
import NumberFormat from "react-number-format";
function Card({
  name,
  flag,
  capital,
  region,
  subRegion,
  population,
  languages,
  border,
}) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={flag} className="card-img-top" alt="flag" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital : {capital}</li>
          <li className="list-group-item">Region : {region}</li>
          <li className="list-group-item">Sub region : {subRegion}</li>
          <li className="list-group-item">
            Population :{" "}
            {
              <NumberFormat
                value={population}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
          </li>
          <li className="list-group-item">
            Languages :
            <div className="row mt-1">
              {languages.map((item) => (
                <div key={item} className="col">
                  <Badge code={item} type={"dark"} />
                </div>
              ))}
            </div>
          </li>
          <li className="list-group-item">
            Borders :
            <div className="row">
              {border.map((item) => (
                <div key={item} className="col">
                  <Badge type={"info"} code={item} />
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card;
