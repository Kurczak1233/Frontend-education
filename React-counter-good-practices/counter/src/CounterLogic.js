import { useState } from "react";

const CounterLogic = () =>
{
    const [counter, setCounter] = useState(0);

    const handleCounterIncrement = () => {
        setCounter((prevValue) => prevValue++)
    }

    console.log(counter);

    return { counter, handleCounterIncrement }
}

export default CounterLogic;