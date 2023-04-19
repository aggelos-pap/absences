import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/List/List";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information Contact</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="item image"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">janedoe@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Phone</div>
                  <div className="itemValue">2101231231</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">Fun street 123</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country</div>
                  <div className="itemValue">USA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1 className="title">Information Others</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">Identity</h1>
                <div className="detailItem">
                  <div className="itemKey">Am:</div>
                  <div className="itemValue">123123131</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">isAdmin</div>
                  <div className="itemValue">No</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">Fun street 123</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country</div>
                  <div className="itemValue">USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottom"></div> */}

      </div>
    </div>
  );
};

export default Single;
