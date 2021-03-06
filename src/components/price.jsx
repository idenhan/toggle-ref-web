import "./price.css";

const Price = () => {
  return (
    <>
      <div id="ins-form-category">
        <span id="bar">|</span>
        <span id="category">보험료</span>
      </div>
      <div className="row">
        <div className="col ml-3" id="price-wrapper">
          <span id="price-wrapper-price">2,500</span>
          <span id="price-wrapper-won">원</span>
        </div>
        <div className="col-2"></div>
        <div className="col" id="price-btn-wrapper">
          <button class="btn btn-primary" type="submit" id="price-btn">
            보호 받기
          </button>
        </div>
      </div>
    </>
  );
};

export default Price;
