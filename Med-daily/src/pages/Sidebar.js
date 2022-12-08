import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import bootstrap from "./charts/publicjs/bootstrap"
import Helpers from "./charts/publicjs/helpers"
import Menu  from "./charts/publicjs/menu"

export default function Sidebar() {
  /**
 * Main
 */

'use strict';

let menu, animate;

(function () {
  // Initialize menu
  //-----------------

  let layoutMenuEl = document.querySelectorAll('#layout-menu');
  layoutMenuEl.forEach(function (element) {
    menu = new Menu(element, {
      orientation: 'vertical',
      closeChildren: false
    });
    // Change parameter to true if you want scroll animation
    window.Helpers.scrollToActive((animate = false));
    window.Helpers.mainMenu = menu;
  });

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
    <aside id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <img src="../assets/img/logo1.png" alt="logo" />
        </Link>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-item ">
          <Link to="/" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>

        {/* Vendor Management */}
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
        <li className="menu-item ">
          <Link to="/ordertable" className="menu-link">
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
                <Link to="/offer" className="menu-link">
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
        {/*Returns  */}
        <li className="menu-item ">
          <Link to="/returntable" className="menu-link">
            <i className="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="Analytics">Returns</div>
          </Link>
        </li>
        {/* Payout Req */}
        <li className="menu-item ">
          <Link to="/payouttable" className="menu-link">
            <i className="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="Analytics">Payout Req</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
