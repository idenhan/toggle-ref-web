import logo from "../assets/logo-insurance.svg";
import "./registerForm.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="wrapper">
        <div className="col"></div>
        <div className="col-5">
          <div>
            <img src={logo} className="ins-logo" alt="logo" />
          </div>
          <div>
            <span id="ins-name">CM01700006</span>
            <span id="ins-name-extra">| 표준플랜</span>
          </div>
          <div id="ins-form">dsfasdf</div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Register;
