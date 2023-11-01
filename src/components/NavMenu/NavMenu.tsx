import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import NavMenuStyled from "./NavMenuStyled";
import { NavLink } from "react-router-dom";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled>
      <div className="button-container">
        <NavLink className="icon" to="/unicorns">
          <FontAwesomeIcon className="icon button" icon={faHouse} />
        </NavLink>
        <NavLink className="icon" to="/">
          <FontAwesomeIcon className="icon button" icon={faPlus} />
        </NavLink>
      </div>
      <img
        className="background-image"
        src="/images/nav-background.svg"
        alt="navigation menu background"
        width="500"
        height="95"
      />
    </NavMenuStyled>
  );
};

export default NavMenu;
