import React from "react";
import "./side-right.scss";
import image1 from "../../assets/img/image/image1.jpeg";
import image2 from "../../assets/img/image/iamge2.jpeg";
import image3 from "../../assets/img/image/image3.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar-image">
      <div className="sidebar-content">
        <div className="head">
          <h2>Welcome to</h2>
          <h2>our community</h2>

          <p>
            Fuse helps developers to build organized and well coded dashboards
            full of beautiful and rich modules. Join us and start building your
            application today.
          </p>
        </div>
        <div className="img-p">
          <span>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image1} alt="" />
          </span>
          <p>More than 17k people joined us, it's your turn</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
