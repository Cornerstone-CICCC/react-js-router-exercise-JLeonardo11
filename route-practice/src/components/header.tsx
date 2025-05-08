import {Link} from "react-router-dom"


const Header= () => {
    return(

        <header>
            <h1>Welcome</h1>
            <nav>
                <menu>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to ="/ProductLayout">Product</Link></li>
                    
                    </ul>
                </menu>
            </nav>      
        </header>
    )
}

export default Header