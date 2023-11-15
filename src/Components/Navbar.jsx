import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar rounded-full bg-white shadow-lg w-fit flex justify-normal items-center m-auto fixed z-40 top-3.5">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"} className="link hover:bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 no-underline rounded-full">Home</Link>
          </li>
          <li>
            <Link to={"/about"} className="link hover:bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 no-underline rounded-full">About Me</Link>
          </li>
          <li>
            <Link to={"/project"} className="link hover:bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 no-underline rounded-full">Project</Link>
          </li>
          <li>
            <Link to={"/experience"} className="link hover:bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 no-underline rounded-full">Experience</Link>
          </li>
        </ul>
      </div>
  )
}

export default Navbar
