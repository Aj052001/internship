import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Adddis() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setSetBusinessName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [country, setCountry] = useState("");
  const [distributorType, setDistributorType] = useState("");
  const [gstNo, setgstNo] = useState("");
  const [gstFile, setGstFile] = useState("");
  const [panNo, setPanNo] = useState("");
  const [panImage, setPanImage] = useState("");

  const myCountry = [
    { name: "Australia", value: "Australia" },
    { name: "Bangladesh", value: "Bangladesh" },
    { name: "Belarus", value: "Belarus" },
    { name: "Brazil", value: "Brazil" },
    { name: "Canada", value: "Canada" },
    { name: "China", value: "China" },
    { name: "France", value: "France" },
    { name: "Germany", value: "Germany" },
    { name: "India", value: "India" },
    { name: "Indonesia", value: "Indonesia" },
    { name: "Israel", value: "Israel" },
    { name: "Italy", value: "Italy" },
    { name: "Japan", value: "Japan" },
    { name: "Korea", value: "Korea" },
    { name: "Mexico", value: "Mexico" },
    { name: "Philippines", value: "Philippines" },
    { name: "Russia", value: "Russia" },
    { name: "South", value: "South" },
    { name: "Thailand", value: "Thailand" },
    { name: "Turkey", value: "Turkey" },
    { name: "Ukraine", value: "Ukraine" },
    { name: "United Arab Emirates", value: "United Arab Emirates" },
  ];
 
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card mb-12">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">ADD Distributor Details</h5>
                      <small className="text-muted float-end">
                        Default label
                      </small>
                    </div>

                    <hr className="my-0" />
                    <div className="card-body">
                      <form
                        id="formAccountSettings"
                        method="POST"
                        onsubmit="return false"
                      >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="firstName"
                              className="form-label float-start"
                            >
                              First Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={firstName}
                              autofocus
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="lastName"
                              className="form-label float-start"
                            >
                              Last Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              id="lastName"
                              value={lastName}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              htmlFor="phoneNumber"
                            >
                              Phone Number
                            </label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">IN (+91)</span>
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                value={phoneNumber}
                                placeholder="202 555 0111"
                              />
                            </div>
                          </div>

                        
                        

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="email"
                              className="form-label float-start"
                            >
                              E-mail
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value={email}
                              placeholder="john.doe@example.com"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlhtmlFor="organization"
                              className="form-label float-start"
                            >
                              Business name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="businessName"
                              name="businessName"
                              value={businessName}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="zipCode"
                              className="form-label float-start"
                            >
                              Postal Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="postalCode"
                              name="postalCode"
                              value={postalCode}
                              placeholder="231465"
                              maxlength="6"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="address"
                              className="form-label float-start"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              name="city"
                              value={city}
                              placeholder="City"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="state"
                              className="form-label float-start"
                            >
                              Area
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="area"
                              value={area}
                              name="area"
                              placeholder="Area"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              htmlFor="country"
                            >
                              Distributor Code
                            </label>
                            <select
                              id="country"
                              className="select2 form-select" name="country"
                            >
<option value="">select</option>
{myCountry.map((currEle)=>{
  <option value="">{currEle.name}</option>
  console.log(currEle.name)
      })}



                            </select>
                          </div>

                          <ddistributorTypev className="mb-3 col-md-6">
                            <label
                              htmlFor="language"
                              className="form-label float-start"
                            >
                              Distributor Type
                            </label>
                            <select
                              id="distributorType"
                              className="select2 form-select"
                              value={distributorType}
                            >
                              <option value="">Select </option>
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="de">German</option>
                              <option value="pt">Portuguese</option>
                            </select>
                          </ddistributorTypev>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="gstNo"
                              className="form-label float-start"
                            >
                              Gst No
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gstNo"
                              name="gstNo"
                              value={gstNo}
                              placeholder="12123323423"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="gstFile"
                              className="form-label float-start"
                            >
                              Gst img
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="gstFile"
                              name="gstFile"
                              value={gstFile}
                              placeholder="view/img.jpg"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="timeZones"
                              className="form-label loat-start"
                            >
                              Pan No
                            </label>
                            <input
                              className="form-control float-start"
                              type="text"
                              id="panNo"
                              name="panNo"
                              value={panNo}
                              placeholder="12123323423"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="panImage"
                              className="form-label float-start"
                            >
                              Pan img
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="panImage"
                              name="panImage"
                              value={panImage}
                              placeholder="view/img.jpg"
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Save
                          </button>
                          <button
                            type="reset"
                            className="btn btn-outline-secondary"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </>
  );
}
