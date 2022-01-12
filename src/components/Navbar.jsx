import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Countries in Asia
          </a>
          <div className="d-flex">
            <button
              className="btn btn-outline-primary"
              onClick={() => window.location.reload(false)}
            >
              Refresh
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
