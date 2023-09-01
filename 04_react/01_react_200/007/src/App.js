import "./App.css";
import Home from "./pages/Home";
// 메뉴 라이브러리 추가
import {Routes, Route, Link} from "react-router-dom"
import Dept from "./pages/Dept"
import Add_Dept from "./pages/Add_Dept"
import Emp from "./pages/Emp"
import Add_Emp from "./pages/Add_Emp"

function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" >
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* Home 시작 */}
              <li class="nav-item">
                
                <Link to="/" class="nav-link active" aria-current="page" >
                  Home
                </Link>
                {/* Home 끝 */}
              </li>
              {/* Home 끝 */}
              {/* Dept 시작 */}
              <li class="nav-item">
                <Link to="/Dept" class="nav-link" >
                  Dept
                </Link>
              </li>
              {/* Dept 끝 */}
              {/* Add-Dept 시작 */}
              <li class="nav-item">
                {/* html, css 표준 명명법 : 단어-단어 */}
                <Link to="/Add-Dept" class="nav-link" >
                  Add Dept
                </Link>
                </li>
                {/* Add-Dept 끝 */}
                {/* Emp 시작 */}
                <li class="nav-item">
                  
                <Link to="/Emp" class="nav-link" >
                  Emp
                </Link>
                {/* Emp 끝 */}
                </li>
                {/* Emp 끝 */}
                {/* Add_Emp 시작 */}
                <li class="nav-item">
                <Link to="/Add-Emp" class="nav-link" >
                  Add Emp
                </Link>
                </li>
                {/* Add_Emp 끝 */}
            </ul>
          </div>
        </div>
      </nav>

      {/* 본문 */}
      <div>
        {/* 컴포넌트와 메뉴 url 연결 : 라우터(Router) */}
        <Routes>
          {/* / : 첫화면 url -> <Home /> 화면에 띄워라 */}
        <Route path="/" element={<Home />}/>
          {/* /dept : dept url -> <Dept/> 화면에 띄워라 */}
        <Route path="/Dept" element={<Dept />}/>
        {/*  /Add-dept : Add_dept url -> <Add_Dept/> 화면에 띄워라 */}
        <Route path="/Add-dept" element = {<Add_Dept />}/>
        {/*  /Emp : Emp url -> <Emp/> 화면에 띄워라 */}
        <Route path="/Emp" element = {<Emp />}/>
        {/*  /Add-Emp : Add_Emp url -> <Emp/> 화면에 띄워라 */}
        <Route path="/Add-Emp" element = {<Add_Emp />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
