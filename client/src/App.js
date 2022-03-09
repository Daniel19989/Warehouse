import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Login from "./components/pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Body from "./components/layout/Body/Body";
import IndividualArticle from "./components/pages/individualArticle/IndividualArticle";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/Article" element={<IndividualArticle />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

