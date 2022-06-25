/*import logo from './logo.svg';*/
/*import : 특정 파일을 불러오다. 리액트로 만든 자바스크립트 파일은 import로 다른 파일을 불러와 사용할 수 있음. Node.js에서 제공하는 기능.
bundler, webpack... webpack을 사용하면 svg 파일과 css파일도 불러와 사용할 수 있음. */
import './App.css';
/*import {Fragment} from 'react';*/


/*App이라는 컴포넌트를 만들어주는 코드. function 키워드를 이용했으므로 함수 컴포넌트라고 함.*/
function App() {

  const name = '리액트';

  return (
    <>
      {/*주석은 이렇게 작성합니다.*/}
      <div className="react">{name}</div>
      <input />
    </>

  )


  /*JSX 코드. JSX는 HTML 태그를 사용할 수 있고 컴포넌트를 작성할 수 있다.*/
}

export default App;
