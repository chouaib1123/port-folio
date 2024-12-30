
import React, { useState, useEffect } from "react";
import HeaderSVG from "../../assets/images/HeaderSVG.svg";
import "./Navbar.css";
const Navbar = () =>{
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        const navLinks = document.querySelectorAll("a.nav-item");

        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        };
       
        navLinks.forEach(link => {
            link.addEventListener("click", handleScroll);
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener("click", handleScroll);
            });
        };
    }, []);

    const toggleNavbar = () => {
        setNavActive(prevState => !prevState);
    };
    return(
        <div className={`navbar ${navActive ? 'active' : ''}`}>
        <div className="phone-electro">
                            <img src={HeaderSVG} alt="" />
                        </div>
        <ul className="nav">
            <li><a href="#section1" className="nav-item">ABOUT</a></li>
            <li><a href="#section2" className="nav-item">SKILLS</a></li>
            <li><a href="#section3" className="nav-item">PROJECTS</a></li>
            <li><a href="#section4" className="nav-item">CONTACT</a></li>
        </ul>
        <button className="phone-button" onClick={toggleNavbar}>
            <div className="bars">
                <div className="bar1 barre"></div>
                <div className="bar2 barre"></div>
                <div className="bar3 barre"></div>
            </div>
        </button>
        </div>
    )
}

export default Navbar;