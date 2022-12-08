import React from "react";
import { Link } from "react-router-dom";

import bootstrap from "./charts/publicjs/bootstrap"
import Helpers from "./charts/publicjs/helpers"
import Menu  from "./charts/publicjs/menu"
export default function Navbar() {

  /**
 * Main
 */

   'use strict';

   let menu, animate;
   
   (function () {
     // Initialize menu
     //-----------------
   
   
     // Initialize menu togglers and bind click on each
     let menuToggler = document.querySelectorAll('.layout-menu-toggle');
     menuToggler.forEach(item => {
       item.addEventListener('click', event => {
         event.preventDefault();
         window.Helpers.toggleCollapsed();
       });
     });
   
     // Display menu toggle (layout-menu-toggle) on hover with delay
     let delay = function (elem, callback) {
       let timeout = null;
       elem.onmouseenter = function () {
         // Set timeout to be a timer which will invoke callback after 300ms (not for small screen)
         if (!Helpers.isSmallScreen()) {
           timeout = setTimeout(callback, 300);
         } else {
           timeout = setTimeout(callback, 0);
         }
       };
   
       elem.onmouseleave = function () {
         // Clear any timers set to timeout
         document.querySelector('.layout-menu-toggle').classList.remove('d-block');
         clearTimeout(timeout);
       };
     };
     if (document.getElementById('layout-menu')) {
       delay(document.getElementById('layout-menu'), function () {
         // not for small screen
         if (!Helpers.isSmallScreen()) {
           document.querySelector('.layout-menu-toggle').classList.add('d-block');
         }
       });
     }
   
     // Display in main menu when menu scrolls
     let menuInnerContainer = document.getElementsByClassName('menu-inner'),
       menuInnerShadow = document.getElementsByClassName('menu-inner-shadow')[0];
     if (menuInnerContainer.length > 0 && menuInnerShadow) {
       menuInnerContainer[0].addEventListener('ps-scroll-y', function () {
         if (this.querySelector('.ps__thumb-y').offsetTop) {
           menuInnerShadow.style.display = 'block';
         } else {
           menuInnerShadow.style.display = 'none';
         }
       });
     }
   
     // Init helpers & misc
     // --------------------
   
     // Init BS Tooltip
     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     tooltipTriggerList.map(function (tooltipTriggerEl) {
       return new bootstrap.Tooltip(tooltipTriggerEl);
     });
   
     // Accordion active class
     const accordionActiveFunction = function (e) {
       if (e.type == 'show.bs.collapse' || e.type == 'show.bs.collapse') {
         e.target.closest('.accordion-item').classList.add('active');
       } else {
         e.target.closest('.accordion-item').classList.remove('active');
       }
     };
   
     const accordionTriggerList = [].slice.call(document.querySelectorAll('.accordion'));
     const accordionList = accordionTriggerList.map(function (accordionTriggerEl) {
       accordionTriggerEl.addEventListener('show.bs.collapse', accordionActiveFunction);
       accordionTriggerEl.addEventListener('hide.bs.collapse', accordionActiveFunction);
     });
   
     // Auto update layout based on screen size
     window.Helpers.setAutoUpdate(true);
   
     // Toggle Password Visibility
     window.Helpers.initPasswordToggle();
   
     // Speech To Text
     window.Helpers.initSpeechToText();
   
     // Manage menu expanded/collapsed with templateCustomizer & local storage
     //------------------------------------------------------------------
   
     // If current layout is horizontal OR current window screen is small (overlay menu) than return from here
     if (window.Helpers.isSmallScreen()) {
       return;
     }
   
     // If current layout is vertical and current window screen is > small
   
     // Auto update menu collapsed/expanded based on the themeConfig
     window.Helpers.setCollapsed(true, false);
   })();
   

  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <Link className="nav-item nav-link px-0 me-xl-4" to="javascript:void(0)">
            <i className="bx bx-menu bx-sm"></i>
          </Link>
        </div>
       

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
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
              >
                Star
              </a>
            </li>

            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <Link
                className="nav-link dropdown-toggle hide-arrow"
                to="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src="../assets/img/avatars/1.png"
                    alt
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img
                            src="../assets/img/avatars/1.png"
                            alt
                            className="w-px-40 h-auto rounded-circle"
                          />
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
                      <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                        4
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
