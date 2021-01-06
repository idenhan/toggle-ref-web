// import arrow from "../assets/controls-arrows-down.svg";
import arrow from "../assets/controls-arrows-down.png";
import "./detail.css";

const Detail = () => {
  return (
    <div id="detail-container">
      <div id="ins-form-category">
        <span id="bar">|</span>
        <span id="category">자세히 보기</span>
      </div>
      <div id="ins-form">
        <div className="row" id="det-form-des">
          <div className="col">상품설명</div>
          <div className="col-6"></div>
          <div className="col" id="arrow-box">
            <img src={arrow} className="arrow" alt="arrow" />
          </div>
        </div>
        <div className="row" id="det-form-bnf">
          <div className="col">보장내용</div>
          <div className="col-6"></div>
          <div className="col" id="arrow-box">
            <img src={arrow} className="arrow" alt="arrow" />
          </div>
        </div>
        <div className="row" id="det-form-ess">
          <div className="col">알아두실 내용</div>
          <div className="col-6"></div>
          <div className="col" id="arrow-box">
            <img src={arrow} className="arrow" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
