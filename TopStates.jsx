import React from "react";

function TopStates() {
  return (
    <>
      <div className="card rounded-4">
        <div className="card-body">
          <h3>Top States</h3>
          <div className="row m-1">
            <div className="col-md-9 bg-success">
              <h6>NY</h6>
            </div>
            <div className="col-md">
              <small>120k</small>
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-7 bg-success">
              <h6>MR</h6>
            </div>
            <div className="col-md">
              <small>80k</small>
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-5 bg-success">
              <h6>NH</h6>
            </div>
            <div className="col-md">
              <small>70k</small>
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3 bg-success">
              <h6>OR</h6>
            </div>
            <div className="col-md">
              <small>50k</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopStates;