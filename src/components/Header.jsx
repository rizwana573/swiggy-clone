import Navbar from "./Navbar";


const Header = ({setIsLoggedIn, isLoggedIn, isOnline}) => {
    const logo = new URL("../assets/foodieLogo.png", import.meta.url).href;
    return (
        <header >
         <h1 className="logo"><img src={logo} alt="logo"/></h1>
         <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} isOnline={isOnline}/>
        </header>
    )
}

export default Header;