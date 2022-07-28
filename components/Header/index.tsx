import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container mx-auto">
        <strong>
          <a className="navbar-brand" href="#">
            Shoply.
          </a>
        </strong>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="#">Library</Link>
            </li>
          </ul>
          <Link href="#">
            <i
              className="bi bi-cart position-relative m-4"
              style={{ fontSize: "36px" }}
            >
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </i>
          </Link>
          <Link href="/signup">
            <button className="btn btn-primary bg-dark border-0" type="submit">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
