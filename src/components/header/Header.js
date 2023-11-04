import React, {Component, useEffect, useMemo, useState} from "react";
import "./header.css";
import Gear from "../../svg/Gear";
import useLinkService from "../../services/LinkService";
import {Link} from "react-router-dom";

const Header = ({links, location}) => {
    const linkElements = !links.loading ? links.value.map((item, key) => {
        return (
            <a key={key} href={item.url} target="_blank"><div className="header-link-logo"><img src={item.logo} alt={item.title}/></div></a>
        )
    }) : null;

    return (
        <div className="header-wrapper">
            <div className="header-links">
                {!links.error ? linkElements : null}
            </div>
            <div className="navigation">
                <Link className="link" to="/">
                    <div className="logo-group">
                        <Gear />
                        <h2>TestHub</h2>
                    </div>
                </Link>
                <div className="nav-group">
                    <Link to="/">
                        <span className={`nav-point ${location !== "/about" ? "active-nav" : ""}`}>Головна</span>
                    </Link>
                    <Link to="/about">
                        <span className={`nav-point ${location === "/about" ? "active-nav" : ""}`}>Про проект</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;