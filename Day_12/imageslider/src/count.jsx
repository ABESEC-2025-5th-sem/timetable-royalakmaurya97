import React, { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    const  decrease = () => setCount(count - 1);
    const  increase = () => setCount(count + 1);
    const  reset = () => setCount(0);

    return (
        <div id="counter">
            <h1>Counter : {count}</h1>
            <div className="counter-container">
                    <button onClick={increase}>Increase</button>
                    <br /> <br />
                    <button onClick={decrease}>Decrease</button>
                    <br /> <br />
                    <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Count;