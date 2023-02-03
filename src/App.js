import React from 'react';

function Son() {
  return <div>나는 아들입니다.</div>;
}

function Mother() {
  return <Son />;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;    
}

export default App;
