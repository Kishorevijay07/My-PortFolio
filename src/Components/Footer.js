import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kishore </h4>
      <h4>Copyright &copy; 2025 KS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Kishorevijay07" target='_blank'><FaGithub/></a>
        <a href="https://linkedin.com/in/kishore-selvaraj-3a957a338/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:kishore.tech.codes@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/kishorevijay978/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer