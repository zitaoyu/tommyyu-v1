import AnchorLink from "react-anchor-link-smooth-scroll";
import { Page } from "../util/page";

const selectedStyles = `relative bg-cyan before:absolute before:w-6 before:h-6 
  before:rounded-full before:border-2 before:border-cyan before:left-[-50%]
  before:top-[-50%]`;

const DotLink = ({ page, selectedPage, setSelectedPage }) => {
  return (
    <AnchorLink
      className={`h-3 w-3 rounded-full transition duration-500 ${
        selectedPage === page
          ? selectedStyles
          : "bg-slate hover:border-2 hover:border-cyan"
      } `}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    />
  );
};

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="fixed right-7 top-[60%] flex animate-fade-in-5s flex-col gap-6 xs-max-h:hidden">
      <DotLink
        page={Page.Home}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page={Page.About}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page={Page.Experience}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page={Page.Work}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page={Page.Contact}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default DotGroup;
