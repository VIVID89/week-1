import React, { useState } from 'react';
import './App.css';

function App() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onIdChangeHandler = (event) => {
        setId(event.target.value);
    };
    const onPwChangeHandler = (event) => {
        setPw(event.target.value);
    };

    return (
        <div>
            <div>
            아이디: <input type = "text"
                value={id}
                onChange={onIdChangeHandler}
            />
            </div>
            <div>
            비밀번호 : <input type="password" 
                value={pw}
                onChange={onPwChangeHandler}
            /> 
            </div>
            <div>
                <button onClick={()=>{
                    alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`
                    );
                    setId("");
                    setPw("");
                }}
                >
                로그인
                </button>
            </div>
            
            
        </div>
    );
}

export default App;
