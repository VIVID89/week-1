import React from 'react';

//자녀 컴포넌트
function Child() { //컴포넌트 이름은 대문자로 시작한다.
  return <div>나는 아들입니다.</div>;
}

// 부모 컴포넌트
function App() {
  return <Child />;    
}

export default App;
