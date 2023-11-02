import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import UnicornListPage from "../../pages/UnicornsList/UnicornsList";
import NavMenu from "../NavMenu/NavMenu";
import UnicornContext from "../../features/unicorns/store/UnicornContext";
import unicorns from "../../data/unicorns";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const { loadUnicorns } = useContext(UnicornContext);

  useEffect(() => {
    loadUnicorns(unicorns);
  }, [loadUnicorns]);

  return (
    <div className="main-container">
      <Header />
      <Loading />
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
