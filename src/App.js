import React from 'react'

export default function App() {
  const number = 11; 

  const pTagStyle = {
    color: "red",
  };
  return (
    <div>
      <p style ={pTagStyle} >안녕하세요 리액트입니다.</p>

      <p style ={pTagStyle} >
      { number > 10 ? number + "은 10보다 크다." : number + "은 10보다 작다."}
      </p>
        
      </div>
      
  );
}
