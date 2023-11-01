import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import NavMenuStyled from "./NavMenuStyled";
import { NavLink } from "react-router-dom";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled>
      <ul className="button-container">
        <li>
          <NavLink to="/unicorns">
            <FontAwesomeIcon className="icon button" icon={faHouse} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <FontAwesomeIcon className="icon button" icon={faPlus} />
          </NavLink>
        </li>
      </ul>
      <div className="nav-background"></div>
    </NavMenuStyled>
  );
};

export default NavMenu;
