import React from "react";
import "./FruitCounter.css"

function FruitCounter({fruitTitle, setCount, count}) {

    function plus() {
        setCount(count + 1);
    }

    function minus(){
        if(count <= 0) {
            setCount(0)
        } else {
            setCount(count -1)
        }
    }

    return(
        <div className="fruit">
            <h3>{fruitTitle}</h3>
            <button type="button" onClick={minus}>
                -
            </button>

            {count}

            <button type="button" onClick={plus}>
                +
            </button>
        </div>
    );
}

export default FruitCounter;