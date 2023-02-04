import React, { useState } from 'react';
import './App.css';

function App() {
    const [fruit, setFruit] = useState('');

    return (
        <div>
            과일 :{' '}
            <input
                value={fruit}
                onChange={function (event) {
                    // console.log(event.target.value);
                    setFruit(event.target.value);
                }}
            />
        </div>
    );
}

export default App;
