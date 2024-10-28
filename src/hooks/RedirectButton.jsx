import React from "react";
import { useNavigate } from 'react-router-dom'

function RedirectButton({ targetPage, text, attributeClassName, otherPage }) {
    const navigate = useNavigate()

    const handleRedirect = () => {
        if ( otherPage == undefined ) {
            navigate(targetPage, { replace: true });
        }
    }

    
        return <button className={attributeClassName} onClick={handleRedirect}>{text} </button>


}

export default RedirectButton