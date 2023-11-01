import AppStyled from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import UnicornListPage from "../../pages/UnicornListPage/UnicornListPage";
import NavMenu from "../NavMenu/NavMenu";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <AppStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/unicorns" />} />
          <Route path="/unicorns" element={<UnicornListPage />} />
        </Routes>
      </AppStyled>
      <NavMenu />
    </div>
  );
};

export default App;
