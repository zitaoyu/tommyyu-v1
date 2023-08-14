import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { Page } from "./util/page";
import { LoadingScreen } from "./components/logo";
import NavBar from "./scenes/navBar";
import LandingSection from "./scenes/landing";
import DotGroup from "./components/dotGroup";
import IconGroup from "./components/iconGroup";
import AboutSection from "./scenes/about";
import Footer from "./scenes/footer";
import ContactSection from "./scenes/contact";
import ExperienceSection from "./scenes/experience";
import ProjectsSection from "./scenes/projects";

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
        <div className="app mx-auto w-5/6 max-w-[1200px]">
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
          <ExperienceSection
            isDesktop={isDesktop}
            setSelectedPage={setSelectedPage}
          />

          <SectionDivider />

          {/* Projects */}
          <ProjectsSection
            isDesktop={isDesktop}
            setSelectedPage={setSelectedPage}
          />

          <SectionDivider />

          {/* Contact */}
          <ContactSection setSelectedPage={setSelectedPage} />

          <Footer isDesktop={isDesktop} />
        </div>
      )}
    </div>
  );
}

export default App;
