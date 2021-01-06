import logo from "../assets/logo-insurance.svg";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col"></div>
        <div className="col-5">
          <div>
            <img src={logo} className="reg-logo" alt="logo" />
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Register;
