import AppStyled from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import UnicornListPage from "../../pages/UnicornListPage/UnicornListPage";
import NavMenu from "../NavMenu/NavMenu";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <AppStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<UnicornListPage />} />
        </Routes>
      </AppStyled>
      <NavMenu />
    </>
  );
};

export default App;
