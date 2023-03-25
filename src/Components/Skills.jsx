import React from "react";
import { comfortableSkills, familiarSkills } from "../AppInfo/skillsData";
import { skillsImage } from "../utils/skillsImage";
import percentageLogo from "../assets/skills/percentages.svg";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="skills_header">
          <h3 className="mainHeader" style={{ textAlign: "center" }}>
            My Skills
          </h3>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          <div className="col-6" style={{padding: ".7rem"}}>
            <img src={percentageLogo} alt="Logo" className="percentageLogo"/>
           
          </div>
          <div className="col-6" style={{padding: ".7rem"}}>
             <div className="mySkills">
                 
                 <div className="tools">
                    <h3 className="skillsHead">Comfortable</h3>
                    <div className="skills_section">
                    {comfortableSkills.map((skill, id) => (
                            <div className="skill_box" key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h5>
                                    {skill}
                                </h5>
                            </div>
                    ))}
                    </div>
                 </div>
                 
                 <div className="tools">
                    <h3 className="skillsHead">Familiar</h3>
                    <div className="skills_section">
                    {familiarSkills.map((skill, id) => (
                            <div className="skill_box" key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h5>
                                    {skill}
                                </h5>
                            </div>
                    ))}
                    </div>
                 </div>
                 
                 {/* <div className="tools">
                    <h3 className="skillsHead">Tools</h3>
                    <button className="skillsBtn">VS Code</button>
                    <button className="skillsBtn">Git</button>
                    <button className="skillsBtn">Github</button>
                    <button className="skillsBtn">NPM</button>
                    <button className="skillsBtn">Postman</button>
                 </div> */}
             </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Skills;
