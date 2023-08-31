import React from "react";
// TODO : 연습문제 반복문 완성하기(ul -li(반복), 부트스트랩)
// TODO : 사용법 ) 배열변수.map((value, index)=>{return (태그)})}
//rfce
function D_Book() {
  //TODO : 변수 정의
  const students = [
    {
      id: 1,
      name: "Inje",
    },
    {
      id: 2,
      name: "Steve",
    },
    {
      id: 3,
      name: "Bill",
    },
    {
      id: 4,
      name: "Jeff",
    },
  ];
  return (
    <div>
      <ul class="list-group">
        {/* map() 특징 : 배열의 개수(길이)만큼 자동 반복됨(0 ~ 3 : 인덱스번호도 자동증가) */}
        {/* 반복문 : 여기서 돌리면 됨 */}
        {students.map((student, index) => {
          return (
            <li class="list-group-item " key={index}>
              {student.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default D_Book;
