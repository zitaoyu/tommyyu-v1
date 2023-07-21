import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { Page } from "./util/page";
import { LoadingScreen } from "./components/Logo";
import NavBar from "./scenes/NavBar";
import LandingSection from "./scenes/Landing";
import DummySection from "./scenes/DummySection";
import DotGroup from "./components/DotGroup";
import IconGroup from "./components/IconGroup";
import AboutSection from "./scenes/About";
import Footer from "./scenes/Footer";

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
        <div className="app w-5/6 max-w-[1200px] mx-auto">
          <NavBar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          {isDesktop && (
            <>
              <DotGroup
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <IconGroup />
            </>
          )}
          {/* Landing */}
          <LandingSection setSelectedPage={setSelectedPage} />

          <SectionDivider />

          {/* About */}
          <AboutSection setSelectedPage={setSelectedPage} />

          <SectionDivider />

          {/* Experience */}
          <DummySection
            page={Page.Experience}
            setSelectedPage={setSelectedPage}
          />

          <SectionDivider />

          {/* Work */}
          <DummySection page={Page.Work} setSelectedPage={setSelectedPage} />

          <SectionDivider />

          {/* Contact */}
          <DummySection page={Page.Contact} setSelectedPage={setSelectedPage} />

          <Footer isDesktop={isDesktop} />
        </div>
      )}
    </div>
  );
}

export default App;
