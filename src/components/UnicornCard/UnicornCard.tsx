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
      <div className="buttons">
        <Button
          text="Details"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
        <Button
          text="Modify"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
        <Button
          text="Delete"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
      </div>
    </UnicornCardStyled>
  );
};

export default UnicornCard;
