import './Header.css'
function Header({setx1}) {
    return ( 
        <>
            <header className='header'>
            <h1>Título Header</h1>
            <button onClick={()=>{
                setx1("Otro nuevo valor")
            }}>Click del header</button>
            </header>
        </>
    );
}

export default Header;