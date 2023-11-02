import { Unicorn } from "../../types";
import ButtonStyled from "../Button/ButtonStyled";
import UnicornCardStyled from "./UnicornCardStyled";

interface UnicornCardProps {
  unicorn: Unicorn;
}

const UnicornCard = ({
  unicorn: { name, sex, kind, image },
}: UnicornCardProps): React.ReactElement => {
  return (
    <UnicornCardStyled className="unicorn-card">
      <img
        className="unicorn-image"
        src={image[0]}
        alt={`This is ${name}`}
        width="281"
        height="253"
      />
      <div className="unicorn-name">
        <h2 className="unicorn-name--text">{name}</h2>
      </div>
      <ul className="unicorn-list">
        <li className="unicorn-list--kind">{kind[0]}</li>
        <li className="unicorn-list--sex">{sex}</li>
      </ul>
      <div className="buttons-container">
        <ButtonStyled type="button" className="buttons-container__button">
          <span className="buttons-container__text">Detail</span>
        </ButtonStyled>
        <ButtonStyled type="button" className="buttons-container__button">
          <span className="buttons-container__text">Modify</span>
        </ButtonStyled>
        <ButtonStyled type="button" className="buttons-container__button">
          <span className="buttons-container__text">Delete</span>
        </ButtonStyled>
      </div>
    </UnicornCardStyled>
  );
};

export default UnicornCard;
