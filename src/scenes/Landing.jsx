import { Page } from "../util/page";

const LandingSection = ({}) => {
  return (
    <div className="w-5/6 max-w-[1920px] mx-auto md:h-full">
      <section
        className="md:flex md:justify-between justify-center md:items-center gap-16 md:h-full py-10"
        id={Page.Home}
      >
        <h1 className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          Hi, my name is.
        </h1>
      </section>
    </div>
  );
};

export default LandingSection;
