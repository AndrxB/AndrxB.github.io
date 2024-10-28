import React from "react";
import RedirectButton from '../hooks/RedirectButton'

function HomePage(){
    return(
        <header className="">
            <div>
                <section className="top-index-container">
                    <h1>Portfolio: André Racraquin Birk</h1>
                </section>

                <div className="bottom-index-container">
                    <div className="top-down"><RedirectButton attributeClassName="button" text="Github Repository" otherPage={true}/></div>
                    <div className="top-down"><RedirectButton attributeClassName="button" targetPage="/AboutMe" text="AboutMe"/></div>
                    <div className="top-down"><RedirectButton attributeClassName="button" targetPage="/CV" text="CV"/></div>
                    <div className="top-down"><RedirectButton attributeClassName="button" targetPage="/Projects" text="Projects"/></div>
                </div>
            </div>
        </header>
    )
}

export default HomePage