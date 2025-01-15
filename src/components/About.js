import React from "react";
import WithBio from "./WithBio";
import WithoutBio from "./WithoutBio";
function About(props) {
  if (props.bio) {
    return <WithBio bio = {props.bio} github={props.github} linkedin={props.linkedin}/>
  } else {
    return <WithoutBio github={props.github} linkedin={props.linkedin}/>
  }
}


export default About;
