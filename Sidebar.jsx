import React from "react";
import './sidebar.css'
import admin from './imgs/admin.jpeg'

function Sidebar() {

    return (
        <>
            <div className="card sidebarcard bg-light rounded-5">
                <div className="card-bpdy ">
                    <aside>
                        <div className="row d-flex felx-column justify-content-between">
                            <div className="col-md">

                                <h3>OrangeFarm</h3>
                                <p></p>
                                <input placeholder="Search" className="rounded-pill"></input>
                                <p></p>
                                <p><i class="fa fa-bar-chart px-2"></i> Dashboard</p>
                                <p><i class="fa-regular fa-user"></i> Customers</p>
                                {/* <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Customers</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Current</a></li>
                                <li><a class="dropdown-item" href="#">New</a></li>
                                <li><a class="dropdown-item" href="#">Negotiating</a></li>
                            </ul>
                        </div> */}

                                <p><i class="fa-regular fa-clipboard"></i> All reports</p>
                                <p><i class="fa-solid fa-globe"></i> Geography</p>
                                <p><i class="fa-regular fa-comment"></i> Conversations</p>
                                <p><i class="fa-solid fa-briefcase"></i> Deals</p>
                                <p><i class="fa-solid fa-file-export"></i> Export</p>
                            </div>
                            <div className="col-md mt-5">
                                <div className="row ">
                                    <div className="col-md">
                                        <img src={admin} alt="" className="image-fluid rounded-circle" />
                                    </div>
                                    <div className="col-md">
                                        <b>Gustavo  Xavier</b><br></br>
                                        <small className="bg-warning rounded-3 ">  admin  </small>
                                    </div>
                                </div>
                                <p><i class="fa-solid fa-gear"></i> Settings</p>
                                <p><i class="fa-solid fa-arrow-right-from-bracket"></i> logout</p>
                            </div>
                        </div>


                    </aside>
                </div>
            </div>
        </>
    )
}

export default Sidebar;