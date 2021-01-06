import "./footer.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer id="footer">
      <div className="row">
        <div className="col-7" id="footer-left">
          <div id="policies">
            <span id="policies-text">회사소개</span>
            <span id="policies-text">이용약관</span>
            <span id="policies-text">개인정보처리방침</span>
            <span id="policies-text">FAQ</span>
            <span id="policies-text">Contact US</span>
          </div>
          <div id="openplan">
            <div id="openplan-co">
              오픈플랜(주) 대표 이광현 | 사업자등록번호 154-87-01568 |
              통신판매업 제2020-강원 춘천-0726호
            </div>
            <div id="openplan-ad">
              주소 : 강원도 춘천시 충혼길52번길 10, 3층
            </div>
          </div>
          <div id="toggle">
            <div id="toggle-co">
              토글보험대리점(주) | 사업자등록번호 137-88-01783 | 대리점등록번호
              제2020070006호
            </div>
            <div id="toggle-ad">
              주소 : 서울시 강남구 테헤란로410 11층,B12호
            </div>
          </div>
          <div id="toggle-cs">
            <div id="toggle-cs-name">토글고객센터 | 평일 10:00 - 18:00</div>
            <div id="toggle-cs-num">
              TEL) 1661-4045 | Mail) openplan@openyourplan.com
            </div>
          </div>
          <div id="copyright">
            Copyright 2020 openplan. inc All right reserved.
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col"></div>
      </div>
    </footer>
  );
};

export default Footer;
