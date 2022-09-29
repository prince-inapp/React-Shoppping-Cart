import './NavBar.css';
function NavBar(props){
    return (
        <div className="navbar">
            <div className="navbar__links">
                {props.children}
            </div>
            <div className="navbar__logo">
            </div>
        </div>
    )
}

export default NavBar;