import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className='nav'>
            <h1 style={{ color: "black" }}>R-To Do App</h1>
            <div>
                <button style={location.pathname === "/Add" ? { boxShadow: "2px 2px 2px 2px tomato " } : null} id='add' > <Link to="/Add">Add Task</Link> </button>
                <button style={location.pathname === "/View" ? { boxShadow: "2px 2px 2px 2px skyblue" } : null} id='view' > <Link to="/View">View Last</Link> </button>

            </div>
        </div>
    );
}
export default Header;
