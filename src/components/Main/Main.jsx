import Jumbotron from "./jumbotron"
function Main({x1}) {
    return ( 
        <>
            <Jumbotron texto={x1}/>
            {/* <h3>UTLD</h3>
            <p>Julio Emilio Silva Licerio</p>
            <p>Sistemas y Desarrollo de Software</p> */}
            <h1>Compartiendo: {x1}</h1>

            {/* <button onClick={()=>{
                    setx1("nuevo valor")
                }}>Actualizar</button>*/}
        </>
    );
}

export default Main