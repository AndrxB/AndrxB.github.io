import React, { useState } from "react";

function DropDownItem({ text, dropDownText }){
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    }

    return(
        <div>
            <button onClick={toggleVisibility}>{text}</button>
            {visibility && <p onClick={toggleVisibility}>{dropDownText}</p>}
        </div>
    )
}

export default DropDownItem