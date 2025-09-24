import React, { useState } from "react";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [language, setLanguage] = useState("es");

  // Guardar usuario en localStorage
  const handleSetUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      {!user ? (
        <Auth setUser={handleSetUser} language={language} />
      ) : (
        <Dashboard user={user} language={language} />
      )}
    </div>
  );
}

export default App;