import React from "react";
import RedirectButton from '../hooks/RedirectButton'
import Tag from "../hooks/Tag";
import SocialMedia from "../hooks/SocialMedia";
import DropDown from "../components/DropDown";
import DropDownItem from "../hooks/DropDownItem";

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

                <div className="top-down"><DropDownItem text="Projects" dropDownText="hi"/></div>
                <div className="top-down"><DropDownItem text="About Me" dropDownText="joe"/></div>
                <div className="top-down"><DropDownItem text="CV" dropDownText="mama"/></div>
            </div>
        </div>
    )
}

export default HomePage