import socialmedia from "./img/social-media.JPG";
import trips from "./img/trips.JPG";
import swim from "./img/swim.JPG";
import valedictorian from "./img/valedictorian.jpg";
import family from "./img/friendship.jpg";
// import sunsets from "./img/sunsets.JPEG";
import dreams from "./img/dreams.jpg";



import React from 'react';
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl }) {
  return (
    <div>
      <a href={description} target="_blank" rel="noreferrer">
        <img src={imgUrl} />
      </a>
    </div>
  )
}

export const Projects = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-2">
      <div class="box row-start-1 row-span-2 col-start-1 col-span-1">
        <ProjectCard title="social-media" description={"/social-media"} imgUrl={socialmedia} />
      </div>
      <div class="box row-start-1 row-span-1 col-start-2 col-span-1">
        <ProjectCard title="swim" description={"/swim"} imgUrl={swim} />
      </div>
      <div class="box row-start-2 row-span-1 col-start-2 col-span-1 ">
        <ProjectCard title="Valedictorian" description={"/valedictorian"} imgUrl={valedictorian}/>     
      </div>
      <div class="box row-start-4 row-span-1 col-start-1 col-span-1">
        <ProjectCard title="Fun Moments" description={"/search"} imgUrl={trips} />
      </div>
      <div class="box row-span-2 col-start-2 col-span-1">
        <ProjectCard title="dreams" description={"/dreams"} imgUrl={dreams}/>
      </div>
      <div class="box row-start-3 row-span-1 col-start-1 col-span-1">
        <ProjectCard title="Friends and Family" description={"/family"} imgUrl={family} />  
      </div>
    </div>
  )
}