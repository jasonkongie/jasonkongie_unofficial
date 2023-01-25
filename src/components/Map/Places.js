import {useParams} from "react-router-dom";
import {List} from "../Gallery/Search"

export const Places = () => {
    const { place } = useParams();

  return (
    <div className="main">
      <List input={place} />
    </div>
  );
}
