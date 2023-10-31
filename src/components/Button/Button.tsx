import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  classModifier: string;
  text: string;
  actionOnClick?: () => void;
}

const Button = ({
  classModifier,
  type,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className={`button ${classModifier}`}
      type={type}
      onClick={actionOnClick}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
