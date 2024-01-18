import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo";
import "./Sidemenu.css";

function Sidemenu() {
  return (
    <nav className="menu">
      <div className="logo-box">
        <Logo />
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "item-active" : ""
            }
          >
            <div className="icon-item">
              <i className="fa-solid fa-house"></i>
            </div>
            <p>Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tables"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "item-active" : ""
            }
          >
            <div className="icon-item">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <p>Tables</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/billing"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "item-active" : ""
            }
          >
            <div className="icon-item">
              <i className="fa-solid fa-wallet"></i>
            </div>
            <p>Billing</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rtl"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "item-active" : ""
            }
          >
            <div className="icon-item">
              <i className="fa-solid fa-wrench"></i>
            </div>
            <p>RTL</p>
          </NavLink>
        </li>
      </ul>
      <p className="separator">Account Pages</p>
      <ul>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "item-active" : ""
            }
          >
            <div className="icon-item">
              <i className="fa-solid fa-user"></i>
            </div>
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "item-active" : ""
            }
          >
            <div className="icon-item">
              <i className="fa-solid fa-right-to-bracket"></i>
            </div>
            <p>Sign In</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "item-active" : ""
            }
          >
            <div className="icon-item">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <p>Sign Up</p>
          </NavLink>
        </li>
      </ul>
      <div className="help-box">
        <div className="questionmark-container">
          <span>
            <i className="fa-solid fa-question"></i>
          </span>
        </div>
        <h2>Need help?</h2>
        <p>Please check our docs</p>
        <button>Documentation</button>
      </div>
    </nav>
  );
}

export default Sidemenu;
