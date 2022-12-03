import React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from "react-bootstrap/Dropdown";

export default function Sidebar() {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <img src="../assets/img/logo1.png" alt="" />
        </Link>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
      <li class="menu-item ">
              <Link to="/" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </Link>
            </li>
     


      { /* Vendor Management */}
        <li className="menu-item active">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="menu-link menu-toggle"
            >
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Layouts">vendor Management</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <li className="menu-item active">
                <Link to="/distributorlist" className="menu-link">
                  <div data-i18n="Without menu">Distributor List</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/distributorrequest" className="menu-link">
                  <div data-i18n="Without navbar">Distributor Request</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/adddis" className="menu-link">
                  <div data-i18n="Container">Add distributor</div>
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </li>



{/* Retailer Management */}
        <li className="menu-item">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="menu-link menu-toggle"
            >
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Layouts">Retailer Management</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <li className="menu-item">
                <Link to="/retailerlist" className="menu-link">
                  <div data-i18n="Without menu">Retailer List</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/retailerrequest" className="menu-link">
                  <div data-i18n="Without navbar">Retailer Request</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/addret" className="menu-link">
                  <div data-i18n="Container">Add Retailer</div>
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </li>



        {/* Products */}
        <li className="menu-item">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="menu-link menu-toggle"
            >
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Layouts">Products</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <li className="menu-item active">
                <Link to="/producttable" className="menu-link">
                  <div data-i18n="Without menu">View Products</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/addproduct" className="menu-link">
                  <div data-i18n="Without navbar">Add new Products</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/addbul" className="menu-link">
                  <div data-i18n="Container">Bul Add</div>
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        {/* Orgders */}
        <li class="menu-item ">
              <Link to="/ordertable" class="menu-link">
              <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="Analytics">Orders</div>
              </Link>
            </li>


        {/* Settings */}
        <li className="menu-item ">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="menu-link menu-toggle"
            >
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Layouts">Settings</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <li className="menu-item active">
                <Link to="#" className="menu-link">
                  <div data-i18n="Without menu">Websites Banner</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="menu-link">
                  <div data-i18n="Without navbar">App Banner</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="menu-link">
                  <div data-i18n="Container">Profile Setting</div>
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        {/* Offer and deal */}
        <li className="menu-item ">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="menu-link menu-toggle"
            >
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Layouts">Offers & Deal</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <li className="menu-item active">
                <Link to="/distributorlist" className="menu-link">
                  <div data-i18n="Without menu">Create Offers</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/distributorrequest" className="menu-link">
                  <div data-i18n="Without navbar">All Offers</div>
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </li>


      </ul>
    </aside>
  );
}
