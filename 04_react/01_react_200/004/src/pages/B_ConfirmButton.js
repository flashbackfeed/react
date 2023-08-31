import React, { useState } from 'react'

function B_ConfirmButton() {
  // TODO : 변수 정의
  let [isConfirm, setIsConfirm] = useState(false);

  // TODO : 함수 정의

  const handleConfirm = () => {
    setIsConfirm(true)
   }

  return (
    <div>
        {/* 예제 : 아래 버튼 클릭하면 문구 : 확인됨 -> 확인하기, 상태(비활성화)
                                          disabled=false(활성화)[true(비활성화)]
        */}
        
        <button onClick={handleConfirm}
                disabled={isConfirm}>
            {
                (isConfirm === true)? "확인됨" : "확인하기"
            }
        </button>
    </div>
  )
}

export default B_ConfirmButton