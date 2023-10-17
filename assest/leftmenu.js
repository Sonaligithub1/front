import React from "react";
import { FaHouseDamage, FaMagento, FaUsers } from "react-icons/fa";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import Link from "next/link";
import { IoMdPersonAdd } from "react-icons/io";

const Leftmenu = () => {
  return (
    <>
      <div className="left-menu">
        <ul className="nav flex-column text-white w-100">
          <a href="#" className="nav-link text-white my-2">
            <FaUsers className="fs-1" />
            <span className="ms-2">UMW DASHBOARD</span>
          </a>
          <li href="#" className="nav-link">
            <Link href="/dashboard" className="text-white text-decoration-none">
              <FaHouseDamage className="menu-link-icon" />
              <span className="mx-2 menu-link-item">Dashboard</span>
            </Link>
          </li>
          <li href="#" className="nav-link">
            <Link
              href="/dashleftmenu/genealogy"
              className="text-white text-decoration-none"
            >
              <FaMagento className="menu-link-icon" />
              <span className="mx-2 menu-link-item">My Geneology</span>
            </Link>
          </li>
          <li href="#" className="nav-link">
            <Link
              href="/dashleftmenu/mydownliners"
              className="text-white text-decoration-none"
            >
              <BsFillArrowDownSquareFill className="menu-link-icon" />
              <span className="mx-2 menu-link-item">My Downliners</span>
            </Link>
          </li>
          <li href="#" className="nav-link">
            <Link
              href="/dashleftmenu/personal"
              className="text-white text-decoration-none"
            >
              <IoMdPersonAdd className="menu-link-icon" />
              <span className="mx-2 menu-link-item">Personal Info</span>
            </Link>
          </li>
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="check1" />
              <label className="tab-label mx-2" htmlFor="check1">
                Payout Details
              </label>
              <div className="tab-content">
                <ul className="ps-0">
                  <li
                    href="dashleftmenu/payoutdeails/payoutlist"
                    className="nav-link"
                  >
                    <Link
                      href="/dashleftmenu/payoutdetails/payoutlist"
                      className="text-white text-decoration-none"
                    >
                      <FaHouseDamage className="menu-link-icon" />
                      <span className="mx-2 menu-link-item">Payout List</span>
                    </Link>
                  </li>
                  <li
                    href="dashleftmenu/payoutdeails/joincommission"
                    className="nav-link"
                  >
                    <Link
                      href="/dashleftmenu/payoutdetails/joincommission"
                      className="text-white text-decoration-none"
                    >
                      <FaHouseDamage className="menu-link-icon" />
                      <span className="mx-2 menu-link-item">
                        Join Commission
                      </span>
                    </Link>
                  </li>
                  <li
                    href="dashleftmenu/payoutdeails/levelcommission"
                    className="nav-link"
                  >
                    <Link
                      href="/dashleftmenu/payoutdetails/levelcommission"
                      className="text-white text-decoration-none"
                    >
                      <FaHouseDamage className="menu-link-icon" />
                      <span className="mx-2 menu-link-item">
                        Level Commission
                      </span>
                    </Link>
                  </li>
                  <li
                    href="dashleftmenu/payoutdeails/referalcomission"
                    className="nav-link"
                  >
                    <Link
                      href="/dashleftmenu/payoutdetails/referalcommission"
                      className="text-white text-decoration-none"
                    >
                      <FaHouseDamage className="menu-link-icon" />
                      <span className="mx-2 menu-link-item">
                        Refferal Commission
                      </span>
                    </Link>
                  </li>
                  <li
                    href="dashleftmenu/payoutdeails/regularbonusdetails"
                    className="nav-link"
                  >
                    <Link
                      href="/dashleftmenu/payoutdetails/regularbonusdetails"
                      className="text-white text-decoration-none"
                    >
                      <FaHouseDamage className="menu-link-icon" />
                      <span className="mx-2 menu-link-item">
                        Regular Bonus Details
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <li href="#" className="nav-link">
            <Link
              href="/dashleftmenu/bankdetails"
              className="text-white text-decoration-none"
            >
              <FaHouseDamage className="menu-link-icon" />
              <span className="mx-2 menu-link-item">Bank Details</span>
            </Link>
          </li>
          <li href="#" className="nav-link">
            <Link
              href="/dashleftmenu/withdrawamount"
              className="text-white text-decoration-none"
            >
              <FaHouseDamage className="menu-link-icon" />
              <span className="mx-2 menu-link-item">Withdraw Amount</span>
            </Link>
          </li>
          <li href="#" className="nav-link">
            <Link href="/register" className="text-white text-decoration-none">
              <FaHouseDamage className="menu-link-icon" />
              <span className="mx-2 menu-link-item">Registration</span>
            </Link>
          </li>
          <li href="#" className="nav-link">
            <FaHouseDamage className="menu-link-icon" />
            <span className="mx-2 menu-link-item">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Leftmenu;
