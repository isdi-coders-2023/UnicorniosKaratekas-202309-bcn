import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavMenuStyled from "./NavMenuStyled";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled>
      <div className="nav-container">
        <a href="/unicorns-list">
          <FontAwesomeIcon className="button" icon={faHouse} />
        </a>
        <a href="/unicorns-list">
          <FontAwesomeIcon className="button" icon={faPlus} />
        </a>
      </div>
      <img
        className="nav-background"
        src="/images/nav-background.svg"
        alt="navigation menu background"
      />
    </NavMenuStyled>
  );
};

export default NavMenu;
