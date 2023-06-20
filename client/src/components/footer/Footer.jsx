import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="flist">
          <p className="pFromFooter">About us</p>
          <li className="fListItem">Our school</li>
          <li className="fListItem">Announcements</li>
          <li className="fListItem">Contact us</li>
          <li className="fListItem">Visit us</li>
          <li className="fListItem">Eclass</li>
        </ul>

        <ul className="flist">
          <p className="pFromFooter">Services</p>
          <li className="fListItem">Eclass</li>
          <li className="fListItem">School Bus</li>
          <li className="fListItem">Online Library</li>
          <li className="fListItem">Homework Platform</li>
          <li className="fListItem">Graduate Support</li>
        </ul>

        <ul className="flist">
          <p className="pFromFooter">Contact</p>
          <li className="fListItem">Email</li>
          <li className="fListItem">Phone</li>
          <li className="fListItem">Address</li>
          <li className="fListItem">Map</li>
          <li className="fListItem">Office hours</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
