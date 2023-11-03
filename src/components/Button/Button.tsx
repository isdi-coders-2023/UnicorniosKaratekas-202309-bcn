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
      className={`buttonsact${classModifier}`}
      type={type}
      onClick={actionOnClick}
      children={text}
    />
  );
};

export default Button;
