import React from "react";
import logo from "../images/logo.png";

const Header = () => {
    return (
        <div
            className="col-12 py-3 pl-2"
            style={{ borderBottom: "1px solid #7777" }}
        >
            <img
                src={logo}
                style={{ height: "35px", verticalAlign: "top" }}
                alt="React logo"
            ></img>
            <span className="h2 pt-4 m-2 text-white-50">
                TravelOPedia
            </span>
        </div>
    );
};

export default Header;
