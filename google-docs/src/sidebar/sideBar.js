import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    const handleBackClick = () => {
      props.onSelect(true)   
     };

    window.onpopstate = handleBackClick;

    return () => {
      window.onpopstate = null; // Cleanup the event handler when the component unmounts
    };
  }, []);

  const toggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <div className="container-fluid mt-3">
      {props.header && (<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <div className="btn" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <a className="navbar-brand text-secondary mr-0 ml-3 font-weight-400">
              <img
                className="mainLogo"
                src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
                alt="docsLogo"
              />
              DOCS
            </a>
            <div className="form-inline ml-auto"></div>
          </div>
        </nav>)}
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">
              <img
                className="icons-h"
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              />{" "}
              Slides
            </h4>
          </div>
          <div className="sd-body">
            <ul>
              <li className="sd-link cursor-pointer">
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
                  className="icons-h"
                  alt="Docs"
                />
                <Link onClick={toggleSidebar} to="/Toolbar" className="sd-link">
                  Docs
                </Link>
              </li>

              <li>
                <a
                  className="sd-link"
                  href="https://docs.google.com/spreadsheets/u/0/"
                >
                  {" "}
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"
                    className="icons-h"
                  />
                  <Link onClick={toggleSidebar}  to="/Contact" className="sd-link">
                    Sheets
                  </Link>
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  href="https://docs.google.com/presentation/u/0/"
                >
                  {" "}
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/slides_2020q4_48dp.png"
                    className="icons-h"
                  />{" "}
                  <Link onClick={toggleSidebar}  to="/Contact" className="sd-link">
                    Slides
                  </Link>
                </a>
              </li>
              <li>
                <a className="sd-link" href>
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
                    className="icons-h"
                  />
                  <Link onClick={toggleSidebar}  to="/Contact" className="sd-link">
                    Forms
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={toggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
