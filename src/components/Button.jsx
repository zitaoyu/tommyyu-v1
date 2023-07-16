import AnchorLink from "react-anchor-link-smooth-scroll";

export const LinkButton = ({ link = "#", className, children, onClick }) => {
  return (
    <a
      className={`${className}
      rounded-lg p-4 font-robotomono text-cyan text-center border-cyan border-2
      hover:bg-cyan hover:text-gray hover:animate-pulse-slow`}
      href={`${link}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export const AnchorLinkButton = ({
  link = "#",
  className,
  children,
  onClick,
}) => {
  return (
    <AnchorLink
      className={`${className}
      rounded-lg p-4 font-robotomono text-cyan text-center border-cyan border-2
      hover:bg-cyan hover:text-gray hover:animate-pulse-slow`}
      href={`#${link}`}
      onClick={onClick}
    >
      {children}
    </AnchorLink>
  );
};
