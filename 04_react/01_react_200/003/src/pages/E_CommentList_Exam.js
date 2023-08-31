// CommentList_Exam.js
import React, { useState } from "react";
import "../assets/styles.css";

function E_CommentList_Exam() {

  const initialComments = [
    {
      id: 1,
      title: "어떻게 배울 것인가",
      publisher: "비즈니스북스",
      author: "존 맥스웰",
      stock: 2,
    },
    {
      id: 2,
      title: "신경끄기의 기술",
      publisher: "갤리온",
      author: "마크 맨슨",
      stock: 0,
    },
    {
      id: 3,
      title: "부의 미래",
      publisher: "청림출판",
      author: "앨빈 토플러",
      stock: 5,
    },
    {
      id: 4,
      title: "기획자의 습관",
      publisher: "홍익출판사",
      author: "최장순",
      stock: 4,
    },
  ];

  let [comments, setComments] = useState(initialComments)
  // 변수/함수 정의
  // -------------------------
  // html 태그
  //
  return (
    <div>
      {/* TODO :배열변수.map() 사용해서 반복문을 
                작성하세요 */}
      {/* map 사용법 : 배열변수.map(()=>{return(태그)}) */}
      {/* comment : 배열의 값, index : 배열의 인덱스 번호 */}
      
      {comments.map((comments, index) => {
        // TODO : 반복 : 4번, 자동반복
        return (
            <div key={index}>
            <span>{comments.title}</span>
            <span>{comments.publisher}</span>
            <span>{comments.author}</span>
            <span>{comments.stock}</span>
          </div>
        );
      })}
    </div>
  );
}

export default E_CommentList_Exam;