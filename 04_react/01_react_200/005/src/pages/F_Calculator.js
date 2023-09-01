import React, { useState } from "react";
// TODO : 연습문제
// 변수를 정의하고, input 태그에 데이터 바인딩과
// handleChange() 함수를 정의하세요.
// 공식은 아래 제시된 것을 사용하세요.
// /* (섭씨온도 * 1.8) + 32 = 화씨온도 */
// /* (화씨온도 - 32) / 1.8 = 섭씨온도 */
// 결과: <p>화씨온도 : {화씨온도} </p>
//       <p>섭씨온도 : {섭씨온도} </p>


function F_Calculator() {
    let [cTemp,SetCTemp] = useState(0);
    let [fTemp,SetFTemp] = useState(0);

    const handleChangeCtemp = (event) => {
        SetCTemp(event.target.value);
    }

    const handleChangeFtemp = (event) => {
        SetFTemp(event.target.value);
    }
  return (
    <div>
      <fieldset>
        {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
        <legend>섭씨온도를 입력해주세요:</legend>
        <input value={cTemp} onChange={handleChangeCtemp} />
        <p>화씨온도 : {cTemp * 1.8 + 32} </p>
      </fieldset>

      <fieldset>
        {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
        <legend>화씨온도를 입력해주세요:</legend>
        <input value={fTemp} onChange={handleChangeFtemp} />
        <p>섭씨온도 : {(fTemp - 32) / 1.8} </p>
      </fieldset>
    </div>
  );
}

export default F_Calculator;
