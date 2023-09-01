import React, { useState } from "react";

function B_SignUp_exam() {
  // TODO : 변수/함수에 맞추어 코딩하기
  // TODO : 변수 초기값은 모두 ""하세요
  // TODO : 추가) 입력양식 부트스트랩 디자인도 추가해 보세요
  // TODO : 변수 초기값은 모두 ""하세요
  // TODO : onChange 함수들을 정의하세요

  // 변수 정의해야하는것 name, password, email, phone, address
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  // 함수 정의해야하는것 handleChangeName, handleChangePassword,handleChangeEmail,handleChangePhone,
  //                   handleSubmit(기본기능은 제거해줘야함)
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name} 패스워드 : ${password}
    이메일 : ${email} 폰: ${phone} 주소 : ${address} `);
    event.preventDefalut(); // 기본 기능 막기 함수
  };

  return (
    <div>
      <form>
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
          />
        </label>

        <br />
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={password}
            name="password"
            onChange={handleChangePassword}
          />
        </label>

        <br />
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={email}
            name="email"
            onChange={handleChangeEmail}
          />
        </label>

        <br />
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={phone}
            name="phone"
            onChange={handleChangePhone}
          />
        </label>

        <br />
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={address}
            name="address"
            onChange={handleChangeAddress}
          />
        </label>
        <br />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
      </form>
    </div>
  );
}

export default B_SignUp_exam;
