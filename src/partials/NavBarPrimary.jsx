import { useState } from "react";

export default function NavBarPrimary({ handlerTheme }) {
  function handleTheme() {
    handlerTheme();
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1>NOTES</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <button className="save" onClick={handleTheme}>
              Toogle Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
