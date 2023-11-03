import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import UnicornListPage from "../../pages/UnicornsList/UnicornsListPage";
import NavMenu from "../NavMenu/NavMenu";
import UiContext from "../../features/ui/store/UiContext";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const { isLoading } = useContext(UiContext);
  return (
    <>
      <Header />
      <AppStyled>
        {isLoading && <Loading />}
        <Routes>
          <Route path="/" element={<Navigate to="/unicorns" />} />
          <Route path="/unicorns" element={<UnicornListPage />} />
        </Routes>
      </AppStyled>
      <NavMenu />
    </>
  );
};

export default App;
