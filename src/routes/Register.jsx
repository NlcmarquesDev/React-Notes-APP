const Register = () => {
  return (
    <main class="box d-flex justify-content-center align-items-center">
      <section>
        <div class="mx-auto form shadow p-3 mb-5 bg-white rounded ">
          <h3 class="text-center ">Register</h3>
          <hr />
          <p class="fw-bold m-0">Demo Account</p>
          <div class="d-flex gap-2">
            <p>
              <span class="fw-bold">Email:</span> test@test.com
            </p>
            <p>
              <span class="fw-bold">Pass:</span> test123
            </p>
          </div>
          <hr />
          <form class="d-flex flex-column gap-3" action="">
            <input
              class="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="email"
            />
            <input
              class="form-control"
              type="text"
              name="emailCheck"
              id="emailcheck"
              placeholder="Confirm email"
            />
            <input
              class="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <button class="btn btn-primary" type="submit">
              Register
            </button>
          </form>
          <hr />
          <p class="fw-semibold">
            If you have account?
            <a class="text-decoration-none " href="/login">
              Login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Register;
