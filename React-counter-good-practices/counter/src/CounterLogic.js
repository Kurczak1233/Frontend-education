import { useEffect, useState } from "react";

const CounterLogic = () =>
{
    const [counter, setCounter] = useState(0);

    const handleCounterIncrement = () => {

        setCounter((prevValue) => ++prevValue)
    }

    const projectId = 1;

    const handleCounterIncrementTest = (number) => {

    }

    useEffect(() => {
        if(!projectId)
        {
            return;
        }
        handleCounterIncrementTest(projectId)
    }, [])

    return { counter, handleCounterIncrement }
}

export default CounterLogic;