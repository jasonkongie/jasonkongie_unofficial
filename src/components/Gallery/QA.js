import data from "./data.json"
import {useParams} from "react-router-dom";
import React from 'react';
import images from './imgIndex';
import { Fade, Slide}  from "react-awesome-reveal";


function List(props) {
    //create a new array by filtering the original array

    const tags = props.item.Tag.split(" | ");

    //loop thru tags
    let filteredData = [];
    for (var i = 0; i < tags.length; i++) {
        const tag = tags[i].toLowerCase();
        const res = data.filter((el) => {
            if (el.Tag.toLowerCase() !== props.item.Tag.toLowerCase()) {
                return el.Tag.toLowerCase().includes(tag);
            }
        })
        filteredData.push(res);   
    }

    var results = Object.keys(filteredData).reduce(function(item, key) {
        return item.concat(filteredData[key]);
    }, []);

    //try to get top 5 search results?

    return (
        <ul>
            <Fade cascade damping={0.3} delay={200}>
                {results.map((item) => (
                    <a href={`/QA/${item.id-1}`}>
                        <li className="font-paragraph text-gray-700 text-xl"  key={item.id}>{item.Tag}</li>
                    </a>

                ))}
            </Fade>
        </ul>
    )
}



export const QApage = () => {
    const { id } = useParams();
    var item = data[id];
    return (
        <section>
            <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2">
                <div className="box row-start-1 row-span-2 col-start-3 col-span-1">
                    <Fade cascade damping={0.5} delay={200}>
                        <h1 className="font-body text-4xl gap-2 text-black"> {item.Tag} </h1>
                        <h1 className="font-paragraph text-2xl gap-20 text-black"> { item.Caption}</h1>
                    </Fade>
                </div>         

                
                <div className="box row-start-2 col-start-3 col-span-1">
                    <Slide>
                        <h1 className="font-paragraph text-4xl text-black">Check out related posts!</h1>
                    </Slide>
                    <List item={item} />
                </div>

                <img className="box row-start-1 row-span-2 col-start-1 col-span-2" style={{height: 1000, width: 1000}} src={images[item.id-1]}/>
            </div>  
        </section>
  )
}