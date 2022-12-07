import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Payouttable() {
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
                    <h5 className="card-header">Payout Request</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Request ID</th>
                            <th>Vendor name</th>
                            <th>Amount</th>
                            <th>Created</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          <tr>
                            <td>
                              <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                              <strong>1</strong>
                            </td>
                            <td>Rohit</td>
                            <td>9090</td>
                            <td>
                              <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0"></h5>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Action
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        to="javascript:void(0);"
                                      >
                                        Paid
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        to="/updateproduct"
                                      >
                                        Reject
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
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
