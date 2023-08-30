// 리액트 주소 : http://localhost:3000
// http://(프로토콜), 
// localhost(인터넷주소 예)naver.com) : 개인pc 인터넷주소
// 3000 : 포트번호(0 ~ 90000) , :80(이것만 생략)
// App.js : 리액트의 1st 페이지(사이트 home 페이지)
// => 리액트 서버가 가동되고 처음으로 실행되는 페이지(js)
// 리액트 페이지(js) : 컴포넌트(==페이지)
// 사용법 :
// function 컴포넌트명(){
      // return{
      //  <div>내용</div>
      // }
// }


import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";
// 자식 컴포넌트 Header import
import Header from "./components/Header.js";
// Footer import
import Footer from "./components/Footer.js";
import B_Home2 from './components/B_Home2.js';
import C_exam from "./components/C_exam.js";
import D_ImportComp from './components/D_ImportComp';
// 최상위 부모 컴포넌트 : App(App.js)
// 자식 컴포넌트 : Home(Home.js)
function App() {
  return (
    <div className="App">
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
      </div>
      {/* 머리말 */}
      {/* <Header></Header> */}


      {/* 주석 : ctrl + / */}
      {/* Home.js 컴포넌트 태그 */}
      
      {/* <Home></Home> */}

      {/* <B_Home2></B_Home2> */}
      
      {/* TODO : 연습문제 */}
      {/* <C_exam></C_exam> */}

      <D_ImportComp></D_ImportComp>

      {/* TODO: 꼬리말 컴포넌트 정의해서 넣으세요
                이름: Footer
      */}

      {/* 꼬리말 */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
