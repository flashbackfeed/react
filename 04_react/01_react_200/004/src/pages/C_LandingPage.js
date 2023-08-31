import React, { useState } from "react";
// TODO : 연습문제
// TODO : onClickLogout 함수는 클릭하면
// TODO : isLoggedIn 변수의 값을 false -> true로 변경한다
// TODO : onClickLogin 함수는 클릭하면
// TODO : isLoggedIn 변수의 값을 true -> false로 변경한다
// rfce
function C_LandingPage() {
  // TODO : 변수 정의
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TODO : 함수 정의
  //nfn
  const onClickLogin = () => {
    // TODO : 아래 코딩하세요
    setIsLoggedIn(true)
  };
  //nfn
  const onClickLogout = () => {
    // TODO : 아래 코딩하세요
    setIsLoggedIn(false)
  };
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default C_LandingPage;
