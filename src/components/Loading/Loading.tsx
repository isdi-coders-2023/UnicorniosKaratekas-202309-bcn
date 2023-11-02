import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <img
        className="loading__image"
        src="./images/loading-unicorn.webp"
        alt="page is loading icon with a unicorn"
      />
      <h2 className="loading__text"> loading </h2>
    </LoadingStyled>
  );
};

export default Loading;
