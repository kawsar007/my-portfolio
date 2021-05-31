import React from "react";

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
            <h3 class="progress-title">HTML5</h3>
            <div class="progress">
              <div
                class="progress-bar"
                // style={{ width: "65%", background: "#ef2d56" }}
                style={{ width: "90%"}}
              >
                <div class="progress-value">90%</div>
              </div>
            </div>

            <h3 class="progress-title">CSS3</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "70%", background: "#ff9900" }}
              >
                <div class="progress-value">70%</div>
              </div>
            </div>

            <h3 class="progress-title">JavaScript</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "60%", background: "#ff9900" }}
              >
                <div class="progress-value">66%</div>
              </div>
            </div>

            <h3 class="progress-title">React Js</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "80%", background: "#ff9900" }}
              >
                <div class="progress-value">75%</div>
              </div>
            </div>

            <h3 class="progress-title">Redux Js</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "70%", background: "#ff9900" }}
              >
                <div class="progress-value">70%</div>
              </div>
            </div>
          </div>
          <div className="col-6" style={{padding: ".7rem"}}>
             <div className="mySkills">
                 
                 <div className="tools">
                    <h3 className="skillsHead">Comfortable</h3>
                    <button className="skillsBtn">HTML</button>
                    <button className="skillsBtn">CSS</button>
                    <button className="skillsBtn">Bootstrap</button>
                    <button className="skillsBtn">JavaScript</button>
                    <button className="skillsBtn">React Js</button>
                    <button className="skillsBtn">Next Js</button>
                    <button className="skillsBtn">Redux Js</button>
                    <button className="skillsBtn">Redux Toolkit</button>
                    <button className="skillsBtn">Styled Components</button>
                    <button className="skillsBtn">SCSS</button>
                    <button className="skillsBtn">Formik Form</button>
                    <button className="skillsBtn">Material UI</button>
                    <button className="skillsBtn">React Router</button>
                 </div>
                 
                 <div className="tools">
                    <h3 className="skillsHead">Familiar</h3>
                    <button className="skillsBtn">C</button>
                    <button className="skillsBtn">Data Structure</button>
                    <button className="skillsBtn">Algorithms</button>
                    <button className="skillsBtn">Node Js</button>
                    <button className="skillsBtn">Express Js</button>
                    <button className="skillsBtn">MongoDB</button>
                    <button className="skillsBtn">Netlify</button>
                    <button className="skillsBtn">Firebase</button>
                 </div>
                 
                 <div className="tools">
                    <h3 className="skillsHead">Tools</h3>
                    <button className="skillsBtn">VS Code</button>
                    <button className="skillsBtn">Git</button>
                    <button className="skillsBtn">Github</button>
                    <button className="skillsBtn">NPM</button>
                    <button className="skillsBtn">Postman</button>
                    
                 </div>
             </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Skills;
