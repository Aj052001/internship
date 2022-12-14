
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Returntable() {
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
                  <div className="card">
                    <h5 className="card-header">Return Table</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Vendor Name</th>
                            <th>Return Amount</th>
                            <th>Return Type</th>
                            <th>View More</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          <tr>
                            <td>
                              <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                             1
                            </td>
                            <td>Ajay</td>
                            <td>
                              900
                            </td>
                            <td>
                              Online
                            </td>
                           
                            <td>
                              <div className="dropdown">
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  {" "}
                                  View Full Details
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody className="table-border-bottom-0">
                          <tr>
                            <td>
                              <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                             1
                            </td>
                            <td>Ajay</td>
                            <td>
                              900
                            </td>
                            <td>
                              Online
                            </td>
                           
                            <td>
                              <div className="dropdown">
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  {" "}
                                  View Full Details
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tbody className="table-border-bottom-0">
                          <tr>
                            <td>
                              <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                             1
                            </td>
                            <td>Ajay</td>
                            <td>
                              900
                            </td>
                            <td>
                              Online
                            </td>
                           
                            <td>
                              <div className="dropdown">
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  {" "}
                                  View Full Details
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
