import React from 'react';
import ProjectBox from './ProjectBox';
import xclone from '../images/X_clone.webp';
import FinanceManagement from '../images/Finance.jpg';
import Attendance_Management from '../images/Attendance.jpg';
import EV_Charging_Station from '../images/Ev.jpeg';
import Pdf_to_Xml from '../images/pdftoxml.png';
import Referral_Hub from '../images/refferal.webp';
import Software_License_Selling_Platform from '../images/sell_software.jpg';
import Social_Media_Site from '../images/Social_Media_Site.webp';
import Offline_Python_Prog from '../images/python.jpeg'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Offline_Python_Prog}   projectName="Offline_Python_Programming_Coach" />
        <ProjectBox projectPhoto={FinanceManagement} projectName="FinanceManagement" />
        <ProjectBox projectPhoto={Attendance_Management} projectName="Attendance_Management" />
        <ProjectBox projectPhoto={xclone} projectName="X_Clone" />
        <ProjectBox projectPhoto={EV_Charging_Station} projectName="EV_Charging_Station" />
        <ProjectBox projectPhoto={Pdf_to_Xml} projectName="Pdf_to_Xml" />
        <ProjectBox projectPhoto={Referral_Hub} projectName="Referral_Hub" />
        <ProjectBox projectPhoto={Software_License_Selling_Platform} projectName="Software_License_Selling_Platform" />
        <ProjectBox projectPhoto={Social_Media_Site} projectName="Social_Media_Site" />
      </div>

    </div>
  )
}

export default Projects