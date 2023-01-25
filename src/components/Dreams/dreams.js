import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import sunset from "./img/sunsets.JPEG"
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import setBodyColor  from "../../setBodyColor";

const Sunsets = () => {
    return (
        <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2}
        style={{
            backgroundImage: `url(${sunset})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} />
    )
}

const Title = () => {
    return (
        <Parallax
        offset={1.6}
        speed={2}>
            <div class="flex items-center justify-center h-screen ">
                <Fade delay={200} duration={2000}>
                    <Zoom duration={1000}>
                        <Slide triggerOnce duration={2000} direction={"down"}>
                            <h1 className="font-body text-white text-7xl ">Sunsets Closures</h1>    
                        </Slide>
                    </Zoom>
                </Fade>
            </div>
        </Parallax>

  );
};


const Essay = () => {
    return (
        <div>
            <ParallaxLayer
                offset={1.7}
                speed={1}
                factor={1}>
                <p>
                    What is our life? A play of passion;
                    Our mirth the music of division;
                    Our mothers’ wombs the tiring-houses be,
                    Where we are dressed for this short comedy.
                    Heaven the judicious sharp spectator is,
                    That sits and marks still who doth act amiss;
                    Our graves that hide us from the searching sun
                    Are like drawn curtains when the play is done.
                    Thus march we, playing, to our latest rest,
                    Only we die in earnest – that’s no jest.
                </p>

            </ParallaxLayer>
        </div>
    )
}


export const Dreams = () => {
    setBodyColor({color: "#000000"})

    return (
        <div>
            <Parallax pages={6}>

                <Sunsets />
                

                <Title/>

                <Essay />

            </Parallax>
            


        </div>
    );
}