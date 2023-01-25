//Exhibits
import lakeTahoeImg from './img/exhibit/lake-tahoe.jpg';
import swimImg from './img/exhibit/swim.jpg';
import oregonCoastImg from './img/exhibit/oregon-coast.jpg';
import joshuaTreeImg from './img/exhibit/joshua-tree.jpg';

//add images to the exhibit part 
function LakeTahoe() { 
  return (
    <a href={`/exhibit/lake-tahoe`}>
      <img src={lakeTahoeImg}/>
    </a>
    )
}

function OregonCoast() { 
  return (
    <a href={`/exhibit/oregon`}>
      <img src={oregonCoastImg}/>
    </a>
    )
}


function Swim() { 
  return (
    <a href={`/exhibit/swim`}>
      <img src={joshuaTreeImg}/>
    </a>
    )
}


function JoshuaTree() { 
  return (
    <a href={`/exhibit/joshua-tree`}>
      <img src={joshuaTreeImg}/>
    </a>
    )
}

export const Gallery = () => {
  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-2">
      <div>
        <LakeTahoe />
      </div>
      <div>
        <JoshuaTree />
      </div>
      <div>
        <OregonCoast />
      </div>
    </div>
  )
}