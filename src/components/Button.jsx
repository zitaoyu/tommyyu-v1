import AnchorLink from "react-anchor-link-smooth-scroll";

export const LinkButton = ({
  link = "#",
  className,
  children,
  onClick = {},
}) => {
  return (
    <a
      className={`${className}
      rounded-lg border-2 border-cyan p-4 text-center font-robotomono text-cyan
      hover:animate-pulse-slow hover:bg-cyan hover:text-gray`}
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
      rounded-lg border-2 border-cyan p-4 text-center font-robotomono text-cyan
      hover:animate-pulse-slow hover:bg-cyan hover:text-gray`}
      href={`#${link}`}
      onClick={onClick}
    >
      {children}
    </AnchorLink>
  );
};
