import "./footer.css";
import React, {Component} from "react";

const Footer = ({links}) => {
    const footerLinks = !links.loading ? links.value.map((item, key) => {
        return (
            <a key={key} href={item.url} className="footer-link-item" target="_blank">
                Me on {item.title}
            </a>
        )
    }) : null;

    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <span>2023 TestHub</span>
                <span>Created using <a href="https://react.dev/" target="_blank">React</a></span>
                <span className="footer-links-span">Links: </span>
                <div className="footer-links">
                    {!links.error ? footerLinks : null}
                </div>
            </div>
        </div>
    );
}

export default Footer;