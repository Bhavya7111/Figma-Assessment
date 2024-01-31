import React from "react";
import img1 from "./imgs/img1.jpeg"
import img2 from "./imgs/img2.jpeg"
import img4 from "./imgs/img4.jpeg"
import img5 from "./imgs/img5.jpeg"



function Customers() {
  return (
    <>
      <div className="card rounded-4">
        <div className="card-body">
          <div className="row justify-content-between ">
            <div className="col-md-6">
              <h3>Customers</h3>

            </div>
            <div className="col-md-6 text-end">
              <p>Sort By <select>
                <option>Newest</option>
              </select></p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-2 rounded-circle ">
              <img src={img1} alt="" className="image-fluid rounded-circle" />
            </div>
            <div className="col-md-6">
              <h5>Chris Friedkly</h5>
              <p>Supermarket Villanova</p>
            </div>
            <div className="col-md-6 text-end">

            </div>
          </div>
          <div className="row  mt-2">
          <div className="col-md-2 rounded-circle ">
              <img src={img4} alt="" className="image-fluid rounded-circle" />
            </div>
            <div className="col-md-6">
              <h5>Maggie Johnson</h5>
              <p>Oasis Organic Inc.</p>

            </div>
            <div className="col-md-6 text-end">

            </div>
          </div>
          <div className="row  mt-2">
          <div className="col-md-2 rounded-circle ">
              <img src={img2} alt="" className="image-fluid rounded-circle" />
            </div>
            <div className="col-md-6">
              <h5>Gael Harry</h5>
              <p>New York  Finest  Fruits</p>

            </div>
            <div className="col-md-6 text-end">

            </div>
          </div>
          <div className="row  mt-2">
          <div className="col-md-2 rounded-circle ">
              <img src={img5} alt="" className="image-fluid rounded-circle" />
            </div>
            <div className="col-md-6">
              <h5>Jenna Sullivan</h5>
              <p>Walmart</p>

            </div>
            <div className="col-md-6 text-end">

            </div>
          </div>
          <p></p>
          <p className="mt-5 text-danger">All Coustomers  <i class="fa fa-arrow-right"></i></p>
        </div>
      </div>
    </>
  )
}

export default Customers;