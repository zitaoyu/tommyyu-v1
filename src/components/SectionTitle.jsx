const SectionTitle = ({ index, title, isCenter = false }) => {
  return isCenter ? (
    <div className="mx-auto max-w-[500px]">
      <h3 className="text-center font-robotomono text-4xl font-semibold text-light-slate sm:tracking-tight">
        <span className="mr-1 text-cyan">{index}.</span>
        {title}
      </h3>
      <div className="my-4 h-[1px] flex-grow bg-gradient-to-r from-cyan to-light-slate"></div>
    </div>
  ) : (
    <div className="sm:mb-4 sm:flex">
      <h3 className="font-robotomono text-4xl font-semibold text-light-slate sm:mb-6 md:tracking-tight">
        <span className="mr-1 text-cyan">{index}.</span>
        {title}
      </h3>
      <div className="my-[22px] h-[1px] flex-grow bg-gradient-to-r from-light-slate to-cyan sm:ml-8"></div>
    </div>
  );
};

export default SectionTitle;
