import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksArr = links.map((item,index)=>{
    return(
      <a href={`#${item}`} key={index}>{item}</a>
    )
  })
  return <nav>{linksArr}</nav>;
}

export default NavBar;
