import React from 'react';

function App() {
    // <---- 자바스크립트 영역 ---->
    // function onClickButtonHandler () {
    //   return alert("클릭!");
    // }
    const onClickButtonHandler = () => alert("클릭!");
      
    

    return (
        /* <---- HTML/JSX 영역  ---->*/
        <div
            style={{   //jsx style 속성에 객체 형식으로 집어넣는다. 
                height: '100vh',  
                display: ' flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span>이것은 내가 만든 App컴포넌트 입니다.</span>
            <button onClick={onClickButtonHandler}>클릭!</button>
        </div>
    );
}

export default App;
