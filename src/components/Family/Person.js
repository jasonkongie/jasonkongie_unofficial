import People from "./People.json"
import {useParams} from "react-router-dom";

function PostCard(props) { 
  return (
    <div className="grid overflow-hidden grid-cols-4 grid-rows-4 gap-2">
            
          <div className="box row-start-4 row-span-1 col-span-4">
              <h1>{ props.item.name}</h1>
                <h1 className="font-paragraph text-sm gap-20 text-black"> { props.item.intro}</h1>
            </div>
      </div>  
    )
}

function List(props) {
    //create a new array by filtering the original array
    const filteredData = People.filter((el) => {
        //if no input the return the original
        return el.name.toLowerCase().includes(props.name.toLowerCase())
    })
    console.log(filteredData)
    return (
        <ul className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-2">
            {filteredData.map((item) => (
                <PostCard key={item.id} item={item} />
            ))}
        </ul>
    )
}




export const Person = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <section>
            <List name={name} />
        </section>
    );
}

