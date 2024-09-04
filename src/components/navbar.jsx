import '../styles/navbar.css';
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <div className="navBar">
            <div className='budName'>MyCalBud</div>
            <Link to='/'><button className='changeNameBtn'>Change name?</button></Link>
        </div>
    )
}

export default NavBar;