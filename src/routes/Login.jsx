export default function Login() {
  return (
    <main className="box d-flex justify-content-center align-items-center">
      <section>
        <div className="mx-auto form shadow p-3 mb-5 bg-white rounded ">
          <h3 className="text-center ">Login</h3>
          <hr />
          <p className="fw-bold m-0">Demo Account</p>
          <div className="d-flex gap-2">
            <p>
              <span className="fw-bold">Email:</span> test@test.com
            </p>
            <p>
              <span className="fw-bold">Pass:</span> test123
            </p>
          </div>
          <hr />
          <form className="d-flex flex-column gap-3" action="">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="email"
            />
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
          <hr />
          <p className="fw-semibold">
            Dont't have account?
            <a className="text-decoration-none " href="/register">
              Register
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
