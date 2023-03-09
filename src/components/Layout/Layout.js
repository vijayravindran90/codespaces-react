import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
   
      <nav>
        <ul>
        <a className="navigation">
            <Link to="/" onClick={()=>alert("Home is clicked")}>Home</Link><br/>
            <Link to="/blogs" onClick={()=>alert("Blogs is clicked")}>Blogs</Link><br/>
            <Link to="/contact" onClick={()=>alert("Contact is clicked")}>Contact</Link><br/>
        </a>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;