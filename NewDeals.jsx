import React from "react";

function NewDeals() {
  return (
    <>
      <div className="card rounded-4">
        <div className="card-body">
          <h3>New Deals</h3>
          <div className="row mt-3 ">
            <div className="col-md">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> Fruit2Go</small>
            </div>
            <div className="col-md-5">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> Mrashall's MKT </small>
            </div>
            <div className="col-md">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> CCNT</small>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> Joana Mini-market</small>
            </div>
            <div className="col-md">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> Little Brazil Vegan </small>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> Target</small>
            </div>
            <div className="col-md-5">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> Organic place</small>
            </div>
            <div className="col-md">
              <small className="text-danger"><i class="fa-regular fa-square-plus"></i> Morello's</small>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default NewDeals;