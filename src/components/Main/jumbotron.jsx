import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import "./Jumbotron.css"
import Copyright from "../Footer/Copyright";
import Copyright2 from "../Header/Copyright";

function Jumbotron({texto}) {
    const {c1, setC1} = useContext(AppContext);
    const [copy, setCopy] = useState(true);

    return ( 
        <>
            <p>JUMBOTRON</p>
            <h1>{texto}</h1>
            <h1 className="jumbotron__title jumbotron__title--purple">{c1}</h1>
            {copy ? <Copyright/> : <Copyright2/>}
            <button onClick={()=>{
                setCopy(s => !s);
            }}>actualiza el copy</button>
        </>
    );
}

export default Jumbotron;