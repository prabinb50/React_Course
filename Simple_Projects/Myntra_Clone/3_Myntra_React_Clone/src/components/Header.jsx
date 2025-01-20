import { IoPerson } from "react-icons/io5";
import { IoBagAdd } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const bag = useSelector(store => store.bag);

    return (
        <header>
            <div className="logo_container">
                <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
            </div>
            <nav className="nav_bar">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Studio <sup>New</sup></a>
            </nav>
            <div className="search_bar">
                <input className="search_input" placeholder="Search for products, brands and more" />
            </div>
            <div className="action_bar">
                <div className="action_container">
                    <IoPerson />
                    <span className="action_name">Profile</span>
                </div>

                <div className="action_container">
                    <MdOutlineFavorite />
                    <span className="action_name">Wishlist</span>
                </div>

                <Link className="action_container" to="/bag">
                    <IoBagAdd />
                    <span className="action_name">Bag</span>
                    <span className="bag-item-count">{bag.length}</span>
                </Link>
            </div>
        </header>
    )
}

export default Header;