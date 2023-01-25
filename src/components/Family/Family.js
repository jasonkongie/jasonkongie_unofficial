import {useParams} from "react-router-dom";

const Name = (props) => {
    const href = `/${props.name}`
    return (
        <a href={href}>
            <h1>{props.name}</h1>
        </a>
    )
}


export const Family = () => {
    const { name } = useParams();
    return (
        <div>
            <h1>Hello</h1>
            <Name name={"Curtis Tam"} />
        </div>
    );
}

