import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import photo from "./img/desert.JPG"
import setBodyColor from '../../setBodyColor'
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Desert = () => {
    return (
        <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2}
        style={{
            backgroundImage: `url(${photo})`,
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
                offset={3}
                speed={1}
                factor={1}>
                <p>
                    Unstable Cliffs - Watch Out. Despite the warning sign, I proceeded. As the sun sets majestically on the horizon, its orange reflection rests upon turbulent waves. I studied every crisp detail in this wide horizon. A perfect balance of chaos and order. 
                    Every pattern on the waves looks chaotic. But, my certain uniqueness of the ocassion grants its orderliness. As I looked beside me, my skateboard - my mode of transportation - sat there. Sitting beside me, the skateboard once represent the uncertainty of my life. 
                    It was a graduation gift from my Mom. Skateboards represents the counter-culture of California, its skatedeck showing a crocodile sunbathing on a beach with palm trees. As I took this skateboard on a roadtrip with my Dad, *he wasn't supposed to come to my graduation due to his *busy* workload, but he did bc I got valedictorian* UNEXPECTED. he tried to convince me to apply as an economics major to Tsinghua in Beijing, or a biology major to University of Melbourne. My life path hit a cross road. Should I go to Tsinghua or Melbourne or stay in America at UCSD? 
                </p>

            </ParallaxLayer>

            <ParallaxLayer
                offset={2.5}
                speed={1.1}
                factor={1}>
                <p>
                   Pondering this, I was listening to Kinderszennen - "Childhood scene" by Schumann. As I looked at the unique wave patterns, I realized that every seemingly random moments has contributed who I am. 
                    I remembered a similar view in Australia. One at Perth. I lived next to a park, and I would go exploring in Nature. I had an autistic sister. Eventhough, I seemingly followed her to speech therapy and piano lessons. I learned important lessons about being myself - and being able to express myself through music with her. I learned to experience things

                    And when Dad got covid at the roadtrip, which is another unexpected event. He took me to an art museum, when he was supposed to be in hong kong. He re-kindled the inner ability to express myself and to find my own perspective of beauty. I got my friends into going to museums with me. 

                    At UCSD, my functional side fits in. But my other side, this side that asks life-question doesn't. It is something that only reserved to isolating sunsets. One side of myself feels so disconnected with another. But, I want to unite them. I want to connect that scientific side of myself with that of classics. 

                    I'm listening to classical music and looking at sunsets. I want that to reflect in my studies. 

                    As I saw the last glimpse of the sunet descend the horizon. I knew the answer to my Dad's inquisition. I want to go discover my expression with a unviersity that cares about promoting human expression not human functionality. 
                </p>
            </ParallaxLayer>
        </div>
    )
}


export const Deserts = () => {
    setBodyColor({color: "#1c1c21"})
    return (
        <div>
            <Parallax pages={6}>

                <Desert />
                
                <Title />
                
                <Essay />
            </Parallax>
        </div>
    );
}