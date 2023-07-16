import AnchorLink from "react-anchor-link-smooth-scroll";
import { Page } from "../util/page";

const selectedStyles = `relative bg-cyan before:absolute before:w-6 before:h-6 
  before:rounded-full before:border-2 before:border-cyan before:left-[-50%]
  before:top-[-50%]`;

const DotLink = ({ page, selectedPage, setSelectedPage }) => {
  return (
    <AnchorLink
      className={`w-3 h-3 rounded-full ${
        selectedPage === page ? selectedStyles : "bg-slate"
      } `}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    />
  );
};

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
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
