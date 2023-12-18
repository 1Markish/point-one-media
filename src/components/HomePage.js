import "../css/HomePage.css"
import menuIcon from "../images/menu-icon.png"
import logo from "../images/PointOneLogo.png"
// import VerIcon from "../images/VerIcon.png"
// import QuaIcon from "../images/QuaIcon.png"
// import AffIcon from "../images/AffIcon.png"

function HomePage(){
    return(
        <>
        <div>
            <div className="Nav-bar">
                <div className="logo"> <img src={logo} alt="Point One Media Logo"/></div>
                <span>HOME</span>
                <span>SERVICES</span>
                <span>CONTACTS</span>
                <span>GET A QUOTE</span>
                <div className="menu"><img src={menuIcon} alt="Menu Icon"/></div>
                 </div>
                 <div>
                    <form className="search-bar">
                        <input type="text" placeholder="Stickers, banner etc ..."/>
                    </form>
                 </div>
          </div>
        </>
    )
}

export default HomePage;