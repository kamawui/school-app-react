import React, {Component, useEffect, useMemo, useState} from "react";
import "./header.css";
import Gear from "../../svg/Gear";
import useLinkService from "../../services/LinkService";
import {Link} from "react-router-dom";

const Header = ({links, error, loading}) => {

    const linkElements = !loading ? links.map((item, key) => {
        return (
            <a key={key} href={item.url} target="_blank"><div className="header-link-logo"><img src={item.logo} alt={item.title}/></div></a>
        )
    }) : null;

    return (
        <div className="header-wrapper">
            <div className="header-links">
                {!error ? linkElements : null}
            </div>
            <div className="navigation">
                <Link className="link" to="/">
                    <div className="logo-group">
                        <Gear />
                        <h2>TestHub</h2>
                    </div>
                </Link>
                <div className="nav-group">
                    <span className="nav-point active-nav">Налаштування</span>
                    <span className="nav-point">Про проект</span>
                </div>

            </div>

        </div>
    );
}

export default Header;