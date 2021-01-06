import logo from "../assets/logo.svg";
import "./navbar.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid m-1">
        <a class="navbar-brand" href="#">
          <img src={logo} className="Nav-logo" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-text">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                보험찾기
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                청구안내
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                이벤트
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                로그인
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
