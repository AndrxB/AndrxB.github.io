import React from "react";
import { useNavigate } from 'react-router-dom';

function RedirectButton({ targetPage, text, attributeClassName}) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        if (targetPage.startsWith('http://') || targetPage.startsWith('https://')) {
            window.location.href = targetPage; 
        } else {
            navigate(targetPage, { replace: true });
        }
    };

    return (
        <button className={attributeClassName} onClick={handleRedirect}>
            {text}
        </button>
    );
}

export default RedirectButton;
