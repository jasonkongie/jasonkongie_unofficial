import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import data from "./data.json"
import images from './imgIndex';



function PostCard(props) { 
  return (
    <a href={`/QA/${props.item.id -1}`}>
      {/* <li className="font-paragraph text-gray-700 text-base hover:opacity-50"  key={item.id}>{item.Caption}</li> */}
        <div className="grid overflow-hidden grid-cols-4 grid-rows-4 gap-2">

            <img className="box row-start-1 row-span-3 col-start-1 col-span-4 object-contain md:object-scale-down h-96 w-192" src={images[props.item.id - 1]} />
            
            <div className="box row-start-4 row-span-1 col-span-4">
                <h1 className="font-paragraph text-sm gap-20 text-black"> { props.item.Caption}</h1>
            </div>
      </div>  
    </a>
    )
}




export function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.Caption.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-2">
            {filteredData.map((item) => (
              <PostCard item={item} />

            ))}
        </ul>
    )
}


export const Search = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

