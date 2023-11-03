import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import UnicornListPage from "../../pages/UnicornsList/UnicornsListPage";
import NavMenu from "../NavMenu/NavMenu";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <AppStyled>
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
