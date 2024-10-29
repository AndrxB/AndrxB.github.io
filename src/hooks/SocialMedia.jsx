import React from "react";

function SocialMedia() {
    const medias = [
        {
            img:"",
            alt:"Facebook",
            URL:"https://www.facebook.com/andre.birk.73/"
        },
        {
            img:"",
            alt:"Instagram",
            URL:"https://www.instagram.com/andrx_birk/"
        },
        {
            img:"",
            alt:"X (formally known as twitter)",
            URL:"https://x.com/blankbrink"
        },
        {
            img:"",
            alt:"Github",
            URL:"https://github.com/AndrxB"
        },
        {
            img:"",
            alt:"LinkedIn",
            URL:"https://www.linkedin.com/in/andré-birk-09a156273/"
        }
    ]

    // https://www.iconfinder.com/search/icons?family=designers-and-developers

    return(
        <>
            {medias.map((media, index) => (
                    <a 
                        className="social-media-icon"
                        key={index} 
                        href={media.URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            //src={media.img} 
                            alt={media.alt} 
                            width="30" 
                            height="30" 
                        />
                        <p>{media.alt}</p>
                    </a>
            ))}
        </>
    )
}

export default SocialMedia