import React from "react";
import img1 from "./imgs/img1.jpeg"
import img2 from "./imgs/img2.jpeg"
import img3 from "./imgs/img3.jpeg"
import img4 from "./imgs/img4.jpeg"

function Chats() {
  return (
    <>
      <div className="card rounded-4">
        <div className="card-body">
          <h3>Chats</h3>
          <p>2 unread messages</p>
          <div className="row justify-content-evenly" >
            <div className="col-md-2 rounded-circle ">
              <img src={img4} alt="" className="image-fluid rounded-circle" />
            </div>
            <div className="col-md-2 rounded-circle ">
              <img src={img1} alt="" className="image-fluid rounded-circle" />
            </div>
            <div className="col-md-2 rounded-circle ">
              <img src={img2} alt="" className="image-fluid rounded-circle" />
            </div>
            <div className="col-md-2 rounded-circle ">
              <img src={img3} alt="" className="image-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chats;