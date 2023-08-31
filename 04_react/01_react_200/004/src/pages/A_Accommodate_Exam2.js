// A_Accommodate_Exam2.js => 자식 컴포넌트
// rfce
// TODO : 연습문제 ) 아래 소스를 완성하세요
//   버튼을 클릭하면 isTable 변수의 값을 true 로 바꾸고,
//   아래 내용을 담고 있는 테이블 태그로
//   화면에 보이게 만드세요.
//   (부트스트랩 테이블 디자인을 활용하세요.)
//    테이블 내용 :
//               No   Dname       Loc
//               1    Sales       부산
//               2    Development 서울

import React, { useState } from "react";

function A_Accommodate_Exam2() {
  // TODO : 변수정의
  let [isTable, setIsTable] = useState(false);
  
  
  // TODO : 함수정의
  const showTable = () => {
    isTable ? setIsTable(false) : setIsTable(true);
  };
  return (
    <div>
      <button className="btn btn-warning" onClick={showTable}>
        {(isTable===true)? "테이블 숨기기" : "테이블 보기"}
      </button>
      <br />
      {/* {변수 && 태그} : 변수(참) 태그가 보임 */}
      {isTable && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Dname</th>
              <th scope="col">Loc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sales</td>
              <td>부산</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Development</td>
              <td>서울</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default A_Accommodate_Exam2;
