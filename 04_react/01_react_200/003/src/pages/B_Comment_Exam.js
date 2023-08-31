import React, { useState } from 'react'

// TODO : 이미지와 함께 화면에 출력하세요
// TODO : 변수 (title="제목" publisher="출판사"
// TODO :        author="작가" stock="재고") 를 만들어서 화면에 출력하세요(useState())

function B_Exam() {
    let [title, setTitle] = useState("제목")
    let [publisher, setPublisher] = useState("작성자")
    let [author, setAuthor] = useState("저자")
    let [stock, setStock] = useState("재고")
     
  return (
    <div className="wrapper">
    {/* 빈공간 */}
    <div className="imageContainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        className="image"
      />
    </div>

    {
      //TODO : 컴포넌트를 작성하세요
      //TODO : title = "제목", publisher="작성자",  author="저자", stock="재고"
    }
    <div className="contentContainer">
      <span className="nameText">{title} </span>
      <span className="commentText">{publisher} </span>
      <span className="commentText">{author} </span>
      <span className="commentText">{stock} </span>
      
    </div>
  </div>
  )
}

export default B_Exam