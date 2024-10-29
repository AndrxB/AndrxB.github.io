import React from "react";
import RedirectButton from '../hooks/RedirectButton'
import Tag from "../hooks/Tag";
import SocialMedia from "../hooks/SocialMedia";

function HomePage(){
    return(
        <div className="main-container">
            <div className="top-index-container">
                <h1>Portfolio: André Racraquin Birk</h1>
                <p>Current Ocupation: BSc, Software Development, IT-University of Copenhagen</p>
                <p>Status: Studying and bouldering</p>
                <p>
                    <Tag text="HTML5"/>
                    <Tag text="React"/>
                    <Tag text="Java"/>
                    <Tag text="C#"/>
                    <Tag text="GoLang"/>
                </p>
                <nav className="social-media"><SocialMedia/></nav>
            </div>

            <div className="bottom-index-container">
                <div className="top-down"><RedirectButton attributeClassName="button" targetPage="https://github.com/AndrxB" text="Github Repository"/></div>
                <div className="top-down"><RedirectButton attributeClassName="button" targetPage="/AboutMePage" text="AboutMe"/></div>
                <div className="top-down"><RedirectButton attributeClassName="button" targetPage="/CVPage" text="CV"/></div>
                <div className="top-down"><RedirectButton attributeClassName="button" targetPage="/ProjectsPage" text="Projects"/></div>
            </div>
        </div>
    )
}

export default HomePage