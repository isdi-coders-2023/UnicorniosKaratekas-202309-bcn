import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import NavMenuStyled from "./NavMenuStyled";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled>
      <ul className="nav-container">
        <li>
          <NavLink aria-label="home" to="/unicorns">
            <FontAwesomeIcon className="icon nav" icon={faHouse} />
          </NavLink>
        </li>
        <li>
          <NavLink aria-label="add" to="/">
            <FontAwesomeIcon className="icon nav" icon={faPlus} />
          </NavLink>
        </li>
      </ul>
    </NavMenuStyled>
  );
};

export default NavMenu;
