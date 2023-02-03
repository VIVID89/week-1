import React from 'react';

//props를 통해 부모 -> 자식 데이터가 전달됐다.
function Son(props) {
    console.log('props', props.gfName);
    return <div>나는 {props.gfName}의 손자입니다!</div>;
}
//부모 -> 자식 정보를 전달했다.
function Mother(props) {
  console.log(props)
    const gfName = props.grandFatherName;
    const name = '흥부인';
    return <Son gfName={gfName} />;
}

function GrandFather() {
    const name = '흥부할배';
    return <Mother grandFatherName={name} />;
}

function App() {
    return <GrandFather />;
}

export default App;
