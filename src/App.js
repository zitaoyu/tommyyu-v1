import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { LoadingScreen } from "./components/Logo";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return (
    <div className="app">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="app">
          <NavBar />
          <div className="h-full"></div>
          <div className="h-full"></div>
        </div>
      )}
    </div>
  );
}

export default App;
