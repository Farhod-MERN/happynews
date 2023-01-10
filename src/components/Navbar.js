import React from "react";

function Navbar() {
  return (
    <header className="blog-header lh-1   border-bottom navbar-header mx-0 mt-0">
      <div className="row flex-nowrap justify-content-between align-items-center blog-center">
        <div className="col-4 display-none pt-1">
          
        </div>
        <div className="col-4 text-center">
          <h3 className="blog-header-logo mb-0">
         <img className="header-img" src="https://happynews.com/wp-content/uploads/2020/06/logo-2.png" alt="Happy news " />
          </h3>
        </div>
        <div className="display-none col-4 d-flex justify-content-end align-items-center">
          <a className="link-secondary" href="#!" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mx-3"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Search</title>
              <circle cx="10.5" cy="10.5" r="7.5"></circle>
              <path d="M21 21l-5.2-5.2"></path>
            </svg>
          </a>
          <a className="btn btn-sm btn-outline-secondary mx-2" href="#!">
            Add news
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
