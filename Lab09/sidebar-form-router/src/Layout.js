import { Outlet, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Title from "./components/Title";

const Layout = () => {
  return (
    <div>
      <Title />
      <Sidebar>
        <Menu>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/search"
            >
              Search
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/nothing-here"
            >
              Nothing Here
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
