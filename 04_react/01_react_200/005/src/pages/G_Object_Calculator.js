import React, { useState } from 'react'

function G_Object_Calculator() {
    let initialTemp = {
        cTemp : 0,
        fTemp : 0,

    }
    // TODO : 변수 정의
    // 바인딩 변수정의
    let [temp, setTemp] = useState(initialTemp);

    // TODO : 함수 정의
    // ...연산자 사용 : 객체 속성 변경
    // 현재 화면값 :event.target.value
    

    const handleChange = (event) => { 
        //현재 화면값
        let attrValue = event.target.value
        //현재 화면에 값이 변경되는 태그이름
        let attrName = event.target.name // cTemp, fTemp
        setTemp({...temp, [attrName]: attrValue})
    }
  return (
    <div>
    <fieldset>
      {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
      <legend>섭씨온도를 입력해주세요:</legend>
      <input value={temp.cTemp}
            name="cTemp"
            onChange={handleChange}/>
      <p>화씨온도 : {(temp.cTemp * 1.8) + 32} </p>
    </fieldset>

    <fieldset>
      {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
      <legend>화씨온도를 입력해주세요:</legend>
      <input value={temp.fTemp}
             name="fTemp"
             onChange={handleChange} />
      <p>섭씨온도 : {(temp.fTemp - 32) / 1.8} </p>
    </fieldset>
  </div>
  )
}

export default G_Object_Calculator