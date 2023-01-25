import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import sunset from "./img/sunsets2.jpg"
import { Fade, Slide, Zoom } from "react-awesome-reveal";

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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </ParallaxLayer>

            <ParallaxLayer
                offset={1.9}
                speed={1.2}
                factor={1}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </ParallaxLayer>
        </div>
    )
}


export const Garage = () => {
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