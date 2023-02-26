import './Header.css';
import 'animate.css';
import {  Home  } from './Home'
import { Project } from './Project'
import { About } from './About'
import { Contact } from './Contact'
import { useState } from 'react';



export function Header() {
        const [active, setActive] = useState("nav__menu");
        const [icon, setIcon] = useState("nav__toggler");
        const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");
    
        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
        };
            return (
                      <nav className="nav">
                        <a  href="#home" className="nav__brand ">
                        <div className="animate__animated animate__heartBeat">LeoAzzE</div>
                        </a>
                        <ul className={active}>
                          <li className="nav__item">
                            <a href="#home" className="nav__link">
                              Home
                            </a>
                          </li>
                          <li className="nav__item">
                            <a href="#about" className="nav__link">
                              Sobre
                            </a>
                          </li>
                          <li className="nav__item">
                            <a href="#project" className="nav__link">
                             Projetos
                            </a>
                          </li>
                          <li className="nav__item">
                            <a href="#contact" className="nav__link">
                              Contatos
                            </a>
                          </li>
                        </ul>
                        <div onClick={navToggle} className={icon}>
                          <div className="line1"></div>
                          <div className="line2"></div>
                          <div className="line3"></div>
                        </div>
                      </nav>
                    
            )
}