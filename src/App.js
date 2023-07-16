import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { Page } from "./util/page";
import { LoadingScreen } from "./components/Logo";
import NavBar from "./components/NavBar";
import LandingSection from "./scenes/Landing";
import DummySection from "./scenes/DummySection";
import DotGroup from "./components/DotGroup";

const SectionDivider = () => {
  return <div className={`h-0.5 w-full `}></div>;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(Page.Home);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

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
          <NavBar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          {/* Landing */}
          <LandingSection setSelectedPage={setSelectedPage} />
          <SectionDivider />
          {/* About */}
          <DummySection page={Page.About} />
          <SectionDivider />
          {/* Experience */}
          <DummySection page={Page.Experience} />
          <SectionDivider />
          {/* Work */}
          <DummySection page={Page.Work} />
          <SectionDivider />
          {/* Contact */}
          <DummySection page={Page.Contact} />
        </div>
      )}
    </div>
  );
}

export default App;
