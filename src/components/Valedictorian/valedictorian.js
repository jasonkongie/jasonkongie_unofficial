import React, { useEffect, useState} from 'react';
import valedictorianVideo from "./video/output.mp4"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import setBodyColor from '../../setBodyColor';

import { Fade, Slide, Bounce, Hinge, Flip, JackInTheBox, Roll, Zoom, Rotate } from "react-awesome-reveal";

// import LOR from "./pdf/LOR.pdf";
import email from "./pdf/e-silverslip.pdf";
import transcript from "./pdf/transcript.pdf";
import LOR from "./pdf/LOR.pdf";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

const Typing = () => {
  return (
      <h1>
          Hello world
    </h1>
  );
};








function PDF(props) {

    function onResumeClick() {
        window.open(props.file);
    }

    return (
        <a onClick={onResumeClick}>
            <p className='font-paragraph text-3xl hover:text-blue-400'>
                {props.text}
            </p>
        </a>
    )
}

  
function Introduction() {
    return (
        <div>
            <Fade cascade damping={0.5} delay={200}>
                <Zoom>
                    <h1 className='font-paragraph text-6xl'>
                        About Me
                    </h1>
                </Zoom>

                <Slide triggerOnce duration={2000} direction={"right"}>

                    <h1 className='font-paragraph text-3xl'>
                    At UC San Diego, I am pursuing a degree in Computer Engineering and a minor in German. Despite my academic focus on developing faster and more efficient digital systems, I believe that technology’s end goal should invoke an emotional resonance with end users.
                    </h1>

                </Slide>
                <Slide triggerOnce duration={2000} direction={"left"}>
                    <h1 className='font-paragraph text-3xl'>
                    I’m an enterprising innovator who enjoys contemplating Picasso’s cubism masterpieces and sunset walks along La Jolla beach. I spent my childhood years in Perth, Australia, and Hong Kong, where I acquired my unique multicultural perspective. Moving to Los Angeles in pursuit of higher education, I availed myself of this opportunity and was fortunate to achieve many accomplishments, most notably my Valedictorian title. 
                    </h1>
                </Slide>
                <Slide triggerOnce duration={2000} direction={"right"}>
                    <h1 className='font-paragraph text-3xl'>
                    With the Blackstone Launchpad Incubator, I am following my thesis to launch a museum mobile app that aims to curate personalized digital interactions for museum visitors via proximity-tracking hardware. Through this project, I aspire 1s & 0s to transcend their binary functions and play a role in our appreciation of beauty. 
                    </h1>
                </Slide>
                <Bounce>
                    <h1 className='font-paragraph text-3xl'>
                    I look forward to sharing my technical expertise or philosophical thoughts with you! Contact me at jckong@ucsd.edu
                    </h1>
                </Bounce>
            
            </Fade>
        </div>
    )
}

function Education() {
    return (
        <Fade cascade damping={0.5} delay={200}>
            <Zoom>
                <h1 className='font-paragraph text-6xl'>
                        Education!
                </h1>
            </Zoom>
            <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-2">

                <div className="box col-start-1 row-span-2 col-span-1">
                    <Slide triggerOnce duration={2000} direction={"left"}>
                        <h1 className='font-paragraph text-3xl'>
                            UCSD
                        </h1>
                    </Slide>
                </div>
                <div className="box col-start-2 row-span-2 col-span-1">
                    <Slide triggerOnce duration={2000} direction={"right"}>
                        <h1 className='font-paragraph text-3xl'>
                            Gabrielino High School
                        </h1>
                        <p>
                            Valedictorian
                            CIF Qualifier 
                            e-silverslip founder
                        </p>
                        <PDF file={transcript} text={"Gabrielino High School Transcript"} />
                        <PDF file={LOR} text={"Letter of Recommendation"} />
                    </Slide>
                </div>

            </div>



        </Fade>

    )
}

function Projects() {
    return (
        <div>
            <Zoom>
                <h1 className='font-paragraph text-6xl'>
                    Projects and Awards
                </h1>
            </Zoom>   

            <div>
                <Slide triggerOnce duration={2000} direction={"left"}>
                    <h1 className='font-paragraph text-3xl text-zinc-700 hover:text-sky-700'>
                        Valedictorian
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </Slide>
                <Slide triggerOnce duration={2000} direction={"left"}>
                    <h1 className='font-paragraph text-3xl'>
                        e-silverslip
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    <PDF file={email} text={"recognition regarding e-silverslip"} />
                </Slide>
                <Slide triggerOnce duration={2000} direction={"left"}>
                    <h1 className='font-paragraph text-3xl'>
                        swimming
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </Slide>
            </div>
        </div>

    )
}


function Hobbies() {
    return (
        <JackInTheBox triggerOnce>
                <h1 className='font-paragraph text-3xl'>
                    Hobbies!
            </h1>
        </JackInTheBox>

    )
}


const Video = () => {
  return (
    <video width={500}controls >
        <source src={valedictorianVideo} type="video/mp4"/>
    </video>
  );
};



export const Valedictorian = () => {
    setBodyColor({color: "#1c1c21"})

    return (
        <div>
            <Parallax pages={5}>
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={1}>
                    <Introduction />
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1}
                    speed={1.2}
                    factor={1}>
                        <Education />
                </ParallaxLayer>


                <ParallaxLayer
                    offset={2}
                    speed={1.4}
                    factor={1}>
                        <Projects />
                </ParallaxLayer>


                <ParallaxLayer
                    offset={3}
                    speed={1.6}
                    factor={1}>
                        <Hobbies />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={1.6}
                    factor={1}>
                        <Typing />
                </ParallaxLayer>

            </Parallax> 

    </div>

  )
}


export default Valedictorian;