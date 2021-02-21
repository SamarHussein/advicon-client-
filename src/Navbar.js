import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-center">
                <Link to="/">
                    <img src='https://cdn0.iconfinder.com/data/icons/apgh-cinema-and-fastfood/64/Camera__cinema__cinematography__film__media__movie_-512.png' alt='logo' className="logo"></img>
                </Link>
                <ul className="nav-links">
                    <li>
                       <Link to="/">Home</Link> 
                    </li> 
                    <li>
                       <Link to="/about">About</Link> 
                    </li> 
                    

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;