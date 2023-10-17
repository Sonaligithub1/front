import Leftmenu from "@/assest/leftmenu";
import React, { useState } from "react";
import {
  FaUserAlt,
  FaCopy,
  FaWallet,
  FaDollarSign,
  FaGift,
  FaAtlassian,
  FaRupeeSign,
} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
// import Graph from "./graph/graph";
import Graph from "../pages/dd";
import Donut from "./graph/donut";

const Dashboard = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="">
        <div className="dashboard">
          {show ? <Leftmenu /> : null}
          <div className="right-content">
            <nav className="d-flex flex-row justify-content-between mx-2">
              <button
                id="sidebarToggleTop"
                className="btn btn-sidebarToggleTop d-md-none d-sm-block me-3"
                onClick={() => setShow(!show)}
              >
                <HiMenuAlt1 />
              </button>
              <h2>My dashboard</h2>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="me-2 d-none d-lg-inline text-gray-600 small me-2">
                      rootuser
                    </span>
                    <FaUserAlt />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="" data-bs-toggle="modal">
                      <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                      Logout{" "}
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <h3 className="link-titile">Affiliate Link</h3>
            <div className="d-flex flex-row justify-content-around align-items-center copy-link">
              <h5 className="url">
                https://react-icons.github.io/react-icons/
              </h5>
              <button className="btn btn-copy-link">
                Copy Link <FaCopy />
              </button>
            </div>
            <div className="row g-2 mx-1 my-3">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="earning">
                  <div className="d-flex flex-row justify-content-between alig-items-center">
                    <h6 className="earning-title">EARNING (TOTAL)</h6>
                    <FaWallet className="earning-icons" />
                  </div>
                  <p>
                    0 <sub className="text-light">0% from last week</sub>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="withdrawal">
                  <div className="d-flex flex-row justify-content-between alig-items-center">
                    <h6 className="earning-title">WITHDRAWAL </h6>
                    <FaDollarSign className="earning-icons" />
                  </div>
                  <p>
                    0 <sub className="text-light">0% from last week</sub>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="bonus">
                  <div className="d-flex flex-row justify-content-between alig-items-center">
                    <h6 className="earning-title">BONUSES (TOTAL)</h6>
                    <FaGift className="earning-icons" />
                  </div>
                  <p>
                    0 <sub className="text-light">0% from last week</sub>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="dwonlines">
                  <div className="d-flex flex-row justify-content-between alig-items-center">
                    <h6 className="earning-title">DOWNLINES </h6>
                    <FaAtlassian className="earning-icons" />
                  </div>
                  <p>
                    0 <sub className="text-light">0% from last week</sub>
                  </p>
                </div>
              </div>
            </div>
            <div className="row mx-1 g-2 mt-2 mb-3">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h6>Earning Overview</h6>
                  </div>
                  <div className="card-body">
                    <Graph />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h6>Earning Sources</h6>
                  </div>
                  <div className="card-body">
                    <Donut />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-2 mt-4 overflow-auto">
              <table className="table table-bordered">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th scope="col" className="fs-4 text-center">
                      Total Earning
                    </th>
                    <th scope="col" className="fs-4 text-center">
                      Total Charges
                    </th>
                    <th scope="col" className="fs-4 text-center">
                      Net Income
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-warning">
                    <td className="text-center">
                      <FaRupeeSign />
                      148.35
                    </td>
                    <td className="text-center">
                      <FaRupeeSign />
                      15.50
                    </td>
                    <td className="text-center">
                      <FaRupeeSign />
                      132.8550
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered mb-0">
                <thead className="text-white">
                  <tr>
                    <td className="text-center bg-info">
                      <FaRupeeSign />
                      148.35
                    </td>
                    <td className="text-center bg-dark">
                      <FaRupeeSign />
                      15.50
                    </td>
                    <td className="text-center bg-danger">
                      <FaRupeeSign />
                      132.8550
                    </td>
                    <td className="text-center bg-success">
                      <FaRupeeSign />
                      132.8550
                    </td>
                    <td className="text-center bg-primary">
                      <FaRupeeSign />
                      132.8550
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-warning text-dark">
                    <td className="fs-4 text-center">Join commision</td>
                    <td className="fs-4 text-center">Referral commision</td>
                    <td className="fs-4 text-center">Level commision</td>
                    <td className="fs-4 text-center">Regular Bonus</td>
                    <td className="fs-4 text-center">Company commision</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
