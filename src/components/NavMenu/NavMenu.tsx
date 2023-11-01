import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import NavMenuStyled from "./NavMenuStyled";
import { NavLink, useLocation } from "react-router-dom";

const NavMenu = (): React.ReactElement => {
  const { pathname } = useLocation();
  return (
    <NavMenuStyled>
      <div className="button-container">
        <NavLink
          className={`icon ${pathname === "/unicorns" ? "icon__line" : ""}`}
          to="/unicorns"
        >
          <FontAwesomeIcon className="icon button" icon={faHouse} />
        </NavLink>
        <NavLink
          className={`icon ${pathname === "/" ? "icon__line" : ""}`}
          to="/"
        >
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
