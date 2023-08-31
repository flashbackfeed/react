import React, { useState } from 'react'

function B_ConfirmButton_Exam() {
    // TODO : 변수 정의
    let[isFull, setIsFull] = useState(false);
    // TODO : 함수정의 : 클릭 (isFull false -> true)
    //nfn
    const Click = () => {
        // (isFull:false -> true), setter 함수 : setIsFull(변경값)
        setIsFull(true);
    }
  return (
    <div>
        <button className='btn btn-warning' onClick={Click}>
        {
        (isFull===true)? <p style={{color:"red"}}>정원이 가득찼습니다.</p> : <p style={{color:"blue"}}>입장할 수 있습니다.</p>
        }
        </button>
    
        
    </div>
  )
}

export default B_ConfirmButton_Exam