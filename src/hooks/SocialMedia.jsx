import React from "react";
import facebook_logo from "../assets/facebook_icon.png"
import instagram_logo from "../assets/instagram_icon.png"
import github_logo from "../assets/github_icon.png"
import linkedin_logo from "../assets/linkedin_icon.png"
import x_logo from "../assets/x_icon.png"

function SocialMedia() {
    const medias = [
        {
            img:facebook_logo,
            alt:"Facebook",
            URL:"https://www.facebook.com/andre.birk.73/"
        },
        {
            img:instagram_logo,
            alt:"Instagram",
            URL:"https://www.instagram.com/andrx_birk/"
        },
        {
            img:x_logo,
            alt:"X (formally known as twitter)",
            URL:"https://x.com/blankbrink"
        },
        {
            img:github_logo,
            alt:"Github",
            URL:"https://github.com/AndrxB"
        },
        {
            img:linkedin_logo,
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
                            src={media.img} 
                            alt={media.alt} 
                            width="25" 
                            height="25" 
                        />
                    </a>
            ))}
        </>
    )
}

export default SocialMedia