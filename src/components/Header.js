import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    history("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Welcome to Books Library!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            {localStorage.getItem("username") ? (
              <div>
                <p>Logged in as {localStorage.getItem("username")}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Link to={"/Login"}>
                <button className="btn btn-outline-success" type="submit">
                  Login
                </button>
                &nbsp;
                <button className="btn btn-outline-success" type="submit">
                  Signup
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
