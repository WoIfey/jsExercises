import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-11 shadow-lg">
      <div>
        <div className="h-16 w-16 m-2">
          <img src="logo.jpg" alt="Logo" />
        </div>
      </div>
      <ul className="flex gap-3 p-3 list-none text-xl text-slate-100 cursor-pointer">
        <CustomLink to="home">Home</CustomLink>
        <CustomLink to="profile">Profile</CustomLink>
        <CustomLink to="about">About</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default Navbar;
