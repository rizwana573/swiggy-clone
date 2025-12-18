import Navbar from "./Navbar";


const Header = ({setIsLoggedIn, isLoggedIn}) => {
    const logo = new URL("../assets/foodieLogo.png", import.meta.url).href;
    return (
        <header >
         <h1 className="logo"><img src={logo} alt="logo"/></h1>
         <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
        </header>
    )
}

export default Header;