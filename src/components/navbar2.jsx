import logo from "../assets/logo.svg";
import "./navbar2.css";

const Navbar2 = () => {
  return (
    <nav>
      <div className="row" id="nav-wrapper">
        <div className="col">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-5"></div>
        <div className="col" id="nav-text-wrapper">
          <div id="nav-text-inside-wrapper">
            <span id="nav-text">보험찾기</span>
            <span id="nav-text">청구안내</span>
            <span id="nav-text">이벤트</span>
            <span id="nav-text">로그인</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
