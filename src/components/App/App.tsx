import AppStyled from "./AppStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <AppStyled />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
