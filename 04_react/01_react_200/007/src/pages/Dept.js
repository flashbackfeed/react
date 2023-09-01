// Dept.js : 자식 컴포넌트
//rfce
import React from "react";
import { useState } from "react";

function Dept() {
  // 객체 배열 === JSON 데이터(문서)
  const initialDept = [
    {
      no: "1",
      dname: "Sales",
    },
    {
      no: "2",
      dname: "Marketing",
    },
    {
      no: "3",
      dname: "Research",
    },
  ];
  // 바인딩 변수
  // let [변수, set변수] = useState(초기값);
  let [dept, setDept] = useState(initialDept);

  return (
    <div className="container mt-5">
      <h4>Department List</h4>
      {/* dept.map() 함수 실행 : 목록태그(ul-li(반복) : 부트스트랩) */}
      <ul class="list-group mt-3">
        {/* dept.map(()=><li>문자열<li>)) */}
        {dept.map((value, index) => (
          <li class="list-group-item" key={index}>
            {value.dname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dept;
