import { useState } from "react";

export const Button = () => {
    // let counter = 0;
    const [counter, setCounter] = useState(0)

    const increment = () => {
       setCounter(counter + 1);
    }

    return (
        <button onClick={increment} onChange={() => setCounter}>{ counter }</button>
    );
}