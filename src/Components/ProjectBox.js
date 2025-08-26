import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    
    EV_Charging_StationDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    EV_Charging_StationGithub : "https://github.com/Kishorevijay07/ChargingStation",
    EV_Charging_StationWebsite : "https://charging-station-frontend-sage.vercel.app/",

    X_CloneDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    X_CloneGithub : "https://github.com/Kishorevijay07/x-clone-main",
    X_CloneWebsite : "https://x-clone-gssj.onrender.com/",

    Attendance_ManagementDesc:"COllege Project , The Main Idea of this project to manage the attendance of students in a college or university. It allows teachers to take attendance, view attendance reports, and manage student information.",
    Attendance_ManagementGithub:"",
    Attendance_ManagementWebsite:"",
 
    
    FinanceManagementDesc:"Freelance Project for a client, this is a web app that allows users to manage their finances, track expenses, and generate reports. It includes features like budget management, expense tracking, and financial reporting.",
    FinanceManagementGithub:"",
    FinanceManagementWebsite:"",

    Pdf_to_XmlDesc:"A web app that converts PDF files to XML format, allowing users to upload a PDF file and receive the converted XML file as a download.",
    Pdf_to_XmlGithub:"https://github.com/Kishorevijay07/Pdf-to-Xml",
    Pdf_to_XmlWebsite:"",
    
    Referral_HubDesc:"A web app that allows users to create and manage referral links for various products and services, track clicks and conversions, and earn rewards for successful referrals.",
    Referral_HubGithub:"https://github.com/Kishorevijay07/ReferralHub",
    Referral_HubWebsite:"https://referral-hub-one.vercel.app/",

    Software_License_Selling_PlatformDesc:"A web app that allows users to buy and sell software licenses, manage their licenses, and track their purchases.OpenAI API is used to generate license keys and validate them.",
    Software_License_Selling_PlatformGithub:"https://github.com/Kishorevijay07/Sell-software-License",
    Software_License_Selling_PlatformWebsite:"https://sell-software-licensexyz.vercel.app/",

    Social_Media_SiteDesc:"A social media site that allows users to create profiles, post updates, and interact with other users.",
    Social_Media_SiteGithub:"https://github.com/Kishorevijay07/SocialMedia-Post-",
    Social_Media_SiteWebsite:""
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
  let show1 = '';
  if(desc[projectName + 'Website']===""){
    show1="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:show1}} href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox