import { Unicorn } from "../../features/unicorns/store/types";
import Button from "../Button/Button";
import UnicornCardStyled from "./UnicornCardStyled";

interface UnicornCardProps {
  unicorn: Unicorn;
}

const UnicornCard = ({
  unicorn: { name, sex, kind, image },
}: UnicornCardProps): React.ReactElement => {
  return (
    <UnicornCardStyled className="unicorn-card" title={name}>
      <img
        className="unicorn-image"
        src={image[0]}
        alt={`This is ${name}`}
        width="281"
        height="253"
      />
      <div className="unicorn-name">
        <h2 className="unicorn-name__text">{name}</h2>
      </div>
      <ul className="unicorn-list">
        <li className="unicorn-list__kind">{kind[0]}</li>
        <li className="unicorn-list__sex">{sex}</li>
      </ul>
      <div className="buttons-container">
        <Button type="button" className="buttons-container__button">
          <span className="buttons-container__text">Detail</span>
        </Button>
        <Button type="button" className="buttons-container__button">
          <span className="buttons-container__text">Modify</span>
        </Button>
        <Button type="button" className="buttons-container__button">
          <span className="buttons-container__text">Delete</span>
        </Button>
      </div>
    </UnicornCardStyled>
  );
};

export default UnicornCard;
