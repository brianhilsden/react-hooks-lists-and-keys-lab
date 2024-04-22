import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologiesArr = technologies.map((item,index)=>{
    return(
    <span key={index}>{item}</span>
    )
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesArr}
      </div>
    </div>
  );
}

export default ProjectItem;
