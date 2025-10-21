import { useState } from "react";

function Footer () {
    
    const [x1, setx1] = useState("START VALUE");

    return ( 
        

        <footer>
            <h1>Componente de react: {x1}</h1>
        </footer>
    );
}

export default Footer ;