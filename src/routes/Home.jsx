import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <NavbarPrimary /> */}

      <main className="home">
        <div>
          <h1 className="logo fs-1">
            Write your thoughts <br />
            down as they come to <br />
            you.
          </h1>
          <p>Notes is free note taking application...</p>
          <div>
            <Link to="/login" className="btn btn-primary login me-3">
              Login
            </Link>
            <Link
              className="btn btn-secondary login text-success"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
        <img src="giphy.gif" alt="" />
      </main>
    </>
  );
}
