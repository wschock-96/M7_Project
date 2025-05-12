import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import NotFoundPage from "./Pages/PageNotFound";
import CharacterList from "./Pages/CharacterList";
import CharacterDetail from "./Pages/CharacterDetail";
import CreateCharacter from "./Components/CreateCharacter";
import NavbarComp from "./components/Navbar";
import CreateCharacter from "./Pages/CreateCharacter";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path="/edit/:id" element={<CharacterForm isEdit={true} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
