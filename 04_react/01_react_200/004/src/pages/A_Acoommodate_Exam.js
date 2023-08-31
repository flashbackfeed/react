import React, { useState } from 'react'

// TODO : 연습문제 : 아래 노란버튼을 클릭하면 파란버튼이 보이게 하세요
// 힌트 : &&(논리연산자)
function A_Acoommodate_Exam() {
    // TODO : 변수정의
   let [isClick, setIsClick] = useState(false);
    // TODO : 함수정의
   const blueClick = () => { 
    if(isClick === false){
        setIsClick(true);
    };
    
   }

   const hideButton = () => {
    if(isClick === true){
        setIsClick(false);
    }
   }

  return (
    <div>
        <button onClick={blueClick} className="btn btn-warning">
        노란버튼</button>
      <br/>
      {isClick &&
      <button className='btn btn-primary' onClick={hideButton}>파란버튼</button>}



    </div>
  )
}

export default A_Acoommodate_Exam