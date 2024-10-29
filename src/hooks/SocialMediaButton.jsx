import React from "react";
import { useNavigate } from 'react-router-dom';

function SocialMediaButton(path, targetPage, attributeClassName){
    const navigate = useNavigate();

    const handleRedirect = () => {
        window.location.href = targetPage; 
    };

    return(
        <a 
        href={targetPage}
        target="_blank"
        rel="noopener noreferrer"
        >
            <img 
                src=    
                alt={`Book ${index + 1}`} 
                width="100" 
                height="150" 
            />
        </a>
    )
}

export default SocialMediaButton