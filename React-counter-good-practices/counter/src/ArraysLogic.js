
import { useState, useEffect } from "react";

const ArraysLogic = () =>
{
    const [array, setArray] = useState([]);
    const [itemId, setItemId] = useState();
    const element = array && array.find((item) => item.id === itemId);
 
    const testMethod = (array) =>{ 
        return array.splice(1,1);
    }   

    const handleArray = () => {
        setArray([{name: "Item1", id: 1}, {name: "Item2", id: 2}, {name: "Item3", id: 3}])
        setArray((prevArray) => { testMethod(prevArray) })
    }

    useEffect(() => {
        handleArray();
    }, [])


    const handleChangeItem = (int) => {
        setItemId(int);
    }

    return { handleChangeItem, element }

}
export default ArraysLogic;