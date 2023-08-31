//rfce
import React, { useState } from "react";

function B_ConfirmButton_Exam2() {
  //isFull 변수 , count 변수
  let [isFull, setIsFull] = useState(false);
  let [count, setCount] = useState(0);
  //click 함수
  const click = () => {
    let tmpVal = count + 1;
    setCount(tmpVal);
    if(tmpVal === 10){
        setIsFull(true)
    }
  };
  return (
    <div>
      현재 정원 : {count}
      <br />
      <button onClick={click} disabled={count === 10 === true ? true : false}>
        {isFull === false ? (
          <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
        ) : (
          <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
        )}
      </button>
    </div>
  );
}

export default B_ConfirmButton_Exam2;
