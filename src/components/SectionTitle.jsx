const SectionTitle = ({ index, title, isCenter = false }) => {
  return isCenter ? (
    <div className="mx-auto max-w-[500px] md:mb-6 md:flex">
      <div className="mx-8 my-[22px] h-[1px] flex-grow bg-gradient-to-r from-light-slate to-cyan"></div>
      <h3 className="font-robotomono text-4xl font-semibold text-light-slate md:tracking-tight">
        <span className="mr-1 text-cyan">{index}.</span>
        {title}
      </h3>
      <div className="mx-8 my-[22px] h-[1px] flex-grow bg-gradient-to-r from-cyan to-light-slate"></div>
    </div>
  ) : (
    <div className="md:mb-4 md:flex">
      <h3 className="font-robotomono text-4xl font-semibold text-light-slate md:mb-6 md:tracking-tight">
        <span className="mr-1 text-cyan">{index}.</span>
        {title}
      </h3>
      <div className="my-[22px] h-[1px] flex-grow bg-gradient-to-r from-light-slate to-cyan md:ml-8"></div>
    </div>
  );
};

export default SectionTitle;
