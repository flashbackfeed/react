// E_Exam3.js : 자식 컴포넌트
// rfce
// TODO : 부모에서 데이터 전송시 아래 결과와 같이 출력하세요
// 출력 : 이 책의 이름은 처음 만난 파이썬 입니다.
//      : 이 책은 총 300페이지 입니다.
import React from 'react'

// 사용법 : props
// 매개변수.변수명
function E_Exam3(props) {
  
    return (
    <div>
        <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
        <h2>{`이 책은 총 ${props.numOfPage} 페이지 입니다.`}</h2>
    </div>
  )
}

export default E_Exam3