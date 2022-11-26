import React from 'react'

export default function Distributorrequest() {
  return (
    <>
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">

        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
            <a href="index.html" class="app-brand-link">
              <img  src="../assets/img/logo1.png" alt=""/>
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
            <li class="menu-item ">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>

            <li class="menu-item active">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="Layouts">vendor Management</div>
              </a>

              <ul class="menu-sub">
                <li class="menu-item ">
                  <a href="distributorlist.html" class="menu-link">
                    <div data-i18n="Without menu">Distributor List</div>
                  </a>
                </li>
                <li class="menu-item active">
                  <a href="distributorrequest.html" class="menu-link">
                    <div data-i18n="Without navbar">Distributor Request</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="adddis.html" class="menu-link">
                    <div data-i18n="Container">Add distributor</div>
                  </a>
                </li>
                
              </ul>
            </li>
			
			
			 <li class="menu-item">
              <a href="#" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="Layouts">Retailer Management</div>
              </a>

              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="retailerlist.html" class="menu-link">
                    <div data-i18n="Without menu">Retailer List</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="retailerrequest.html" class="menu-link">
                    <div data-i18n="Without navbar">Retailer Request</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="addret.html" class="menu-link">
                    <div data-i18n="Container">Add Retailer</div>
                  </a>
                </li>
                
              </ul>
            </li>
			 <li class="menu-item">
              <a href="#" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="Layouts">Products</div>
              </a>

             
            </li>

          
             
          </ul>
        </aside>

        <div class="layout-page">

          <nav
            class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i class="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <div class="navbar-nav align-items-center">
                <div class="nav-item d-flex align-items-center">
                  <i class="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    class="form-control border-0 shadow-none"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>

              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <li class="nav-item lh-1 me-3">
                  <a
                    class="github-button"
                    href="https://github.com/themeselection/sneat-html-admin-template-free"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >Star</a
                  >
                </li>

                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                  <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div class="avatar avatar-online">
                      <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                              <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-semibold d-block">John Doe</span>
                            <small class="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bx bx-user me-2"></i>
                        <span class="align-middle">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bx bx-cog me-2"></i>
                        <span class="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <span class="d-flex align-items-center align-middle">
                          <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span class="flex-grow-1 align-middle">Billing</span>
                          <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <a class="dropdown-item" href="auth-login-basic.html">
                        <i class="bx bx-power-off me-2"></i>
                        <span class="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>


          <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
                <div class="card">
                <h5 class="card-header">Distributor request</h5>
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Business name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div class="dropdown">
                               <a class="dropdown-item" href="distributordetailsr.html"
                                > View Full Details</a
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div class="dropdown">
                             <a class="dropdown-item" href="distributordetailsr.html"
                                > View Full Details</a
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div class="dropdown">
                             <a class="dropdown-item" href="distributordetailsr.html"
                                > View Full Details</a
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div class="dropdown">
                            <a class="dropdown-item" href="distributordetailsr.html"
                                > View Full Details</a
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div class="dropdown">
                           <a class="dropdown-item" href="distributordetailsr.html"
                                > View Full Details</a
                              >
                           
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <footer class="content-footer footer bg-footer-theme">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  , by
                  <a href="#" target="_blank" class="footer-link fw-bolder">Meddaily</a>
                </div>
                
              </div>
            </footer>

            <div class="content-backdrop fade"></div>
          </div>
        </div>
      </div>

      <div class="layout-overlay layout-menu-toggle"></div>
    </div>

   

    <script src="../assets/vendor/libs/jquery/jquery.js"></script>
    <script src="../assets/vendor/libs/popper/popper.js"></script>
    <script src="../assets/vendor/js/bootstrap.js"></script>
    <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="../assets/vendor/js/menu.js"></script>

    <script src="../assets/vendor/libs/apex-charts/apexcharts.js"></script>

    <script src="../assets/js/main.js"></script>

    <script src="../assets/js/dashboards-analytics.js"></script>

    <script async defer src="https://buttons.github.io/buttons.js"></script>
    </div>
    </>
  )
}
