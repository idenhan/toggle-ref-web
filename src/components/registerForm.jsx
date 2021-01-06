import logo from "../assets/logo-insurance.svg";
import view from "../assets/views-categories-label.svg";
import "./registerForm.css";
import Price from "./price";
import Detail from "./detail";

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
          <div id="ins-form">
            <div className="row">
              <div className="col">a</div>
              <div className="col-8">
                <div id="ins-form-category">
                  <span id="bar">|</span>
                  <span id="category">기본정보</span>
                </div>
                <label for="basic-url" class="form-label">
                  보험 시작일시
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="보험 시작일"
                    aria-label="보험 시작일"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <label for="basic-url" class="form-label">
                  보험 종료일시
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="보험 종료일"
                    aria-label="보험 종료일"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <label for="basic-url" class="form-label">
                  주택종류
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="주택종류를 선택해 주세요."
                    aria-label="주택종류를 선택해 주세요."
                    aria-describedby="basic-addon1"
                  />
                  {/* <select class="form-select" id="inputGroupSelect01">
                    <option selected>주택종류를 선택해 주세요.</option>
                    <option value="1">빌라</option>
                    <option value="2">아파트</option>
                    <option value="3">단독주택</option>
                  </select> */}
                </div>
                <label for="basic-url" class="form-label">
                  화재보험(건물) 가입금액
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="화재보험(건물)"
                    aria-label="화재보험(건물)"
                    aria-describedby="basic-addon1"
                  />
                  {/* <select class="form-select" id="inputGroupSelect01">
                    <option selected>화재보험(건물)</option>
                    <option value="1">서울에서</option>
                    <option value="2">집을</option>
                    <option value="3">어케사냐</option>
                  </select> */}
                </div>
                <label for="basic-url" class="form-label">
                  화재보험(가재도구) 가입금액
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="화재보험(가재도구)"
                    aria-label="화재보험(가재도구)"
                    aria-describedby="basic-addon1"
                  />
                  {/* <select class="form-select" id="inputGroupSelect01">
                    <option selected>화재보험(가재도구)</option>
                    <option value="1">서울에서</option>
                    <option value="2">집을</option>
                    <option value="3">어케사냐</option>
                  </select> */}
                </div>
                <label for="basic-url" class="form-label">
                  주소
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="주소를 입력해주세요."
                    aria-label="주소를 입력해주세요."
                    aria-describedby="basic-addon1"
                  />
                </div>
                <label for="basic-url" class="form-label">
                  면적정보
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="면적을 알려주세요."
                    aria-label="면적을 알려주세요."
                    aria-describedby="basic-addon1"
                  />
                  {/* <select class="form-select" id="inputGroupSelect01">
                    <option selected>면적을 알려주세요.</option>
                    <option value="1">20평 이하</option>
                    <option value="2">40평 이하</option>
                    <option value="3">80평 이하</option>
                    <option value="3">100평 이상</option>
                  </select> */}
                </div>
                <div id="ins-form-category">
                  <span id="bar">|</span>
                  <span id="category">가입자 정보</span>
                </div>
                <label for="basic-url" class="form-label">
                  가입자 이름
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="가입자 이름을 입력해주세요."
                    aria-label="가입자 이름을 입력해주세요."
                    aria-describedby="basic-addon1"
                  />
                </div>
                <label for="basic-url" class="form-label">
                  주민등록번호
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="앞 6자리"
                    aria-label="앞 6자리"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="뒤 7자리"
                    aria-label="뒤 7자리"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col">a</div>
            </div>
          </div>
          <div id="ins-form-category">
            <span id="bar">|</span>
            <span id="category">보장내용</span>
          </div>
          <div>
            <div className="row">
              <div className="col">
                <div className="mb-2">화재/폭발/파열(건물)</div>
                <div className="mb-2">화재/폭발/파열(가재)</div>
                <div className="mb-2">배상책임</div>
                <div className="mb-2">
                  <img src={view} className="view-label" alt="view" />
                </div>
              </div>
              <div className="col"></div>
              <div className="col">
                <div className="mb-2">보험료 선택</div>
                <div className="mb-2">보험료 선택</div>
                <div className="mb-2">1억원</div>
              </div>
            </div>
          </div>
          <Price />
          <Detail />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Register;
