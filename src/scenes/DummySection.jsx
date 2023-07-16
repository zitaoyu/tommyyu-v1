const DummySection = ({ page }) => {
  return (
    <div className="h-full w-5/6 max-w-[1920px] mx-auto ">
      <section
        className="h-full flex flex-col justify-center text-cyan"
        id={page}
      >
        <h1 className="font-opensans text-4xl text-center">
          {page} page is under construction...
        </h1>
      </section>
    </div>
  );
};
export default DummySection;
