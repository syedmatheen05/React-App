import React, {useState} from "react";
function Component(){
    const [name, setName] = useState(); 
    const updateName = ()=> {
        setName("Syed Matheen");
    }
    return (
        <div>
            <h3>Name:{name}</h3>
            <button onClick={updateName}>Set Name</button>
        </div>
    );
}
export default Component