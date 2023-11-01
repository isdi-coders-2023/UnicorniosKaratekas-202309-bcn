import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import UnicornListPage from "../../pages/UnicornListPage/UnicornListPage";
import NavMenu from "../NavMenu/NavMenu";
import UnicornContext from "../../features/unicorns/store/UnicornContext";
import unicornMock from "../../data/mockData";

const App = (): React.ReactElement => {
  const { loadUnicorns } = useContext(UnicornContext);

  useEffect(() => {
    loadUnicorns(unicornMock);
  }, [loadUnicorns]);

  return (
    <div className="main-container">
      <Header />
      <AppStyled>
        <Routes>
          <Route path="/" element={<UnicornListPage />} />
        </Routes>
      </AppStyled>
      <NavMenu />
    </div>
  );
};

export default App;
