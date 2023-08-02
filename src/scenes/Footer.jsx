import IconGroup from "../components/IconGroup";

const Footer = ({ isDesktop }) => {
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-2 text-center font-robotomono text-slate">
      {!isDesktop && <IconGroup isVerticle={false} />}
      <span className="text-sm">Designed & Built by Tommy Yu</span>
      <span className="text-xs">©2023 YU. All Rights Reserved.</span>
    </div>
  );
};

export default Footer;
