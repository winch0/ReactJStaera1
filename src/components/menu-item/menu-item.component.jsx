import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <Link className="title" to="/shop" >{title.toUpperCase()} compre aqui</Link>
      
    </div>
  </div>
);

// design pattern: HOC (HIGH ORDER COMPONENT)
export default withRouter(MenuItem);
