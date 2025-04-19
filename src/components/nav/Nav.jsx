import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiPhoneCall, BiUser} from 'react-icons/bi'
import { BiCodeAlt, BiCog, BiBrain, BiBoltCircle } from 'react-icons/bi';
import { BiCog } from 'react-icons/bi';
import {FaLaptopCode} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import { LuAppWindow } from 'react-icons/lu'
import { CgLaptop } from 'react-icons/cg'

const Nav = () =>{
    const[activeNav, setActiveNav] = useState("#");

    return(
        <nav>
            <a href="#home" onClick={() =>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}><BiUser/></a>
            <a href="#currExp" onClick={()=>setActiveNav("#currExp")} className={activeNav === "#currExp" ? 'active' : ''}><FaLaptopCode/></a>
            <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav==="#experience" ?'active' :''}><BiBrain/></a>
            <a href='#contacts' onClick={() => setActiveNav("#contacts")} className={activeNav==="#contacts" ? 'active' : ''}><BiPhoneCall/></a>
        </nav>
    )
}

export default Nav