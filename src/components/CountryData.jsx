import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {  Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import { render } from "@testing-library/react";
const CountryData = (args) => {
  const [countryData, setCountryData] = useState([]);
  const [name, setName] = useState('');
  const fetchData = async () => {
    setName("");
    await fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountryData(data));

      setCountryData((countryData)=>{
        const updatedData=[...countryData,name]
        console.log('updated',updatedData)
     return updatedData
      })
  };
  console.log("country===>", countryData);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <h1 style={{ color: "red" }}>COUNTRY DATA</h1> <br />
      <input
        type="text"
        value={countryData.name}
        onChange={(e) => setName(e.target.value)}
        style={{ border: "2px solid black" }}
      />
      <button
        type="submit"
        onClick={() => fetchData()}
        style={{ border: "2px solid  black" }}
      >
        Submit
      </button>
      <br />
      <br />
      {countryData?.map((country, index) => (
        <div>
          <table width="100%">
            <th>sr#</th>
            <th>Capital</th>
            <th>Official Name</th>
            <tr>
              <td>{index}</td>

              <td>{country.capital}</td>

              <td>{country.name.official}</td>
              <td>
                {" "}
                <Button color="danger" onClick={toggle}>
                  Action
                </Button>
              </td>
              <td>
                {" "}
                <Link to={"/countrycard"}
                CountryCard countryData={countryData}
                >
                  <Button color="danger">info</Button>
                </Link>
              </td>
            </tr>
          </table>
          <div>
            <br />
            <hr />
          </div>
        </div>
      ))}
      <div>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Languages</ModalHeader>
          <ModalBody>
            {countryData?.map((country) => (
              <div>{JSON.stringify(country.languages)}</div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="primary">update</Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default CountryData;
