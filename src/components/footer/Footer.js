import "./footer.css";
import React, {Component} from "react";

const Footer = ({links, error, loading}) => {
    const footerLinks = links.map((item, key) => {
        return (
            <a key={key} href={item.url} className="footer-link-item" target="_blank">
                Me on {item.title}
            </a>
        )
    })

    return (
        <div className={"footer-wrapper"}>
            <div className="footer-content">
                <span>2023 «Quiz»</span>
                <span>Created using <a href="https://opentdb.com/" target="_blank">Trivia Database</a></span>
                <span className="footer-links-span">Links: </span>
                <div className="footer-links">
                    {footerLinks}
                </div>
            </div>
        </div>
    );
}

export default Footer;