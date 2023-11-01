import { Routes, Route, Navigate } from "react-router-dom";
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
