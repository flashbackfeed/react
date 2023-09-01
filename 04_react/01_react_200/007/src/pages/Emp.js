import React,{useState} from "react";

function Emp() {
  const initialEmps = [
    {
      eno: 1,
      ename: "Scott",
    },
    {
      eno: 2,
      ename: "James",
    },
    {
      eno: 3,
      ename: "Kim",
    },
  ];
  let [emp,setEmp] = useState(initialEmps);
  return (
    <div className="container mt-5">
      <h4>Empolyment List</h4>
      
      {/* emp.map(()=>{<li>{value.ename}</li>}) */}
      <ul class="list-group mt-3">
        {
          emp.map((value,index)=><li class="list-group-item" key={index}>{value.ename}</li>)
        }
        
      </ul>
    </div>
  );
}

export default Emp;
