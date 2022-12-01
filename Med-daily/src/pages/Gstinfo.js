import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function Distributordetails() {
  return (
   <>
      <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
       

    <Sidebar/>
      

        
        <div className="layout-page">
          

          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <Link className="nav-item nav-link px-0 me-xl-4" to="/">
                <i className="bx bx-menu bx-sm"></i>
              </Link>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>
              
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                
                <li className="nav-item lh-1 me-3">
                  <a
                    className="github-button"
                    to="https://github.com/themeselection/sneat-html-admin-template-free"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >Star</a
                  >
                </li>

                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <Link className="nav-link dropdown-toggle hide-arrow" to="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bx bx-cog me-2"></i>
                        <span className="align-middle">Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="auth-login-basic.html">
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">Log Out</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                
              </ul>
            </div>
          </nav>

       

      
          <div className="content-wrapper">
           

            <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
      
                  <div className="card mb-12">

                    {/* Gst Info */}
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Distributor Details</h5>
                      
                    </div>
                   
                   
                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div className="row">
                         
						   <div className="mb-3 col-md-6">
                            <label for="timeZones" className="form-label" class="float-start">GST NO.</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="12123323423" />
                          </div>
                          <div className="mb-3 col-md-6">
                             <label for="timeZones" className="form-label" class="float-start">GST img</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="view/img.jpg" />
                          </div>
                        </div>
                        <div className="mt-2">
                         
                        </div>
                      </form>
                    </div>



                    {/* Bank details */}
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Distributor Details</h5>
                      
                    </div>
                   
                   
                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                             <label for="timeZones" className="form-label" class="float-start">Bank Name</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="view/img.jpg" />
                          </div>
						   <div className="mb-3 col-md-6">
                            <label for="timeZones" className="form-label" class="float-start">Benificiary Name</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="12123323423" />
                          </div>
                          <div className="mb-3 col-md-6">
                             <label for="timeZones" className="form-label" class="float-start">Account No.</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="view/img.jpg" />
                          </div>
						   <div className="mb-3 col-md-6">
                            <label for="timeZones" className="form-label" class="float-start">IFSC</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="12123323423" />
                          </div>
                          <div className="mb-3 col-md-6">
                             <label for="timeZones" className="form-label" class="float-start">UPI ID</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="view/img.jpg" />
                          </div>
                        </div>
                        <div className="mt-2">
                         
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
  )
}
