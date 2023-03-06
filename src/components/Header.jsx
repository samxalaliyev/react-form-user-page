import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li> <NavLink to="/" >Home</NavLink> </li>
                    <li><NavLink to="/form" >Form</NavLink>  </li>
                    <li><NavLink to="/users" >Users</NavLink> </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header