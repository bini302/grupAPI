import React, { useState } from "react";
import "./IntroducePage.css";
function Introduce() {
  const teamMembers = [
    {
      name: "유은지",
      role: "Frontend Developer",
      github: "https://github.com/EunjiYoo9932",
    },
    {
      name: "변유빈",
      role: "Backend Developer",
      github: "https://github.com/bini302",
    },
    {
      name: "손현지",
      role: "Backend Developer",
      github: "https://github.com/sonhyunji",
    },
    {
      name: "김민우",
      role: "Frontend Developer",
      github: "https://github.com/kmw1122",
    },
  ];

  return (
    <div className="team-container">
      <h1>중부대학교</h1>
      <h2>정보보호학전공</h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Introduce;
