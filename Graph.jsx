import React from "react";

import { Chart } from "react-google-charts";

export const data = [
    ["year", "Deals"],
    ["2016", 9000],
    ["2017", 10000],
    ["2018", 40000],
    ["2019", 52000],
    ["2020", 9000],
    ["2021", 15000],
    ["2022", 52000],
    ["2023", 100000],
];

export const options = {

    curveType: "function",
};

function Graph() {
    return (
        <>
            <div className="card rounded-4">
                <div className="card-body">
                    <div className="row justify-content-between ">
                        <div className="col-md-6">
                        <h3>Graph</h3>

                        </div>
                        <div className="col-md-6 text-end">
                             <select >
                                <option>Yearly</option>
                            </select>
                        </div>
                    </div>
                    
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="260px"
                        data={data}
                        options={options}
                    />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card rounded-4">
                                <div className="card-body">
                                    <p>Top Month</p>
                                    <h5>November</h5>
                                    <p>2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded-4">
                                <div className="card-body">
                                    <p>Top Year</p>
                                    <h5>2023</h5>
                                    <p>96K sold so far</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded-4">
                                <div className="card-body">
                                    <p>Top buyer</p>
                                    <small><b>Maggie Johnson</b></small>
                                    <br></br>
                                    <small>Oasis Organic inc.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph;