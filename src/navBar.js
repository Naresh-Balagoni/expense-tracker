import {createPath, Link} from "react-router-dom";
import CreateProfile from "./CreateProfile/createProfile";
import HomePage from "./CreateProfile/HomePage/homePage";

function NavBar(){

    return(
        <div>
            <li>
            <Link to='./createProfile' >
                Login
            </Link>
            </li>
            <CreateProfile/>
            <li>
            <Link to='./homePage'>HomePage 
            </Link>
            </li>
        </div>
        

    )
}
export default NavBar;