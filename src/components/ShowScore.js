import { useState } from "react";

export default function Counter({ value }) {
    console.log(value)
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + value);
    };

    const handleDecrement = () => {
        setCount(count - value);
    };
    const reset = () => {
        setCount(count === 0)
    };
    return (
        <main className="score-main">
            <div className="score">
                <h3 className="title">Score: </h3>
                <h3 className="value">{count}</h3>
            </div>
            <section className="score-buttons">
                <button className="negative" onClick={handleDecrement}>Decrease</button>
                <button className="positive" onClick={handleIncrement}>Increase</button>
                <button className="new" onClick={reset}>Reset</button>
            </section>
        </main>
    );
}