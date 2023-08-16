import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faCodepen,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  { link: "https://www.linkedin.com", faIcon: faLinkedin },
  { link: "https://www.github.com", faIcon: faGithub },
  { link: "https://www.codepen.com", faIcon: faCodepen },
  { link: "https://www.instagram.com", faIcon: faInstagram },
];

const SocialMediaIcon = ({ link, faIcon }) => {
  return (
    <a
      className={`p-1 h-8 w-8 text-slate transition duration-500 hover:-translate-y-1 hover:text-primary ss-max-h:h-6 ss-max-h:w-6`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon className="h-full w-full" icon={faIcon} />
    </a>
  );
};

const IconGroup = ({ isVerticle = true }) => {
  return (
    <div
      className={`flex ${
        isVerticle
          ? "fixed bottom-0 left-7 animate-fade-in-5s flex-col xs-max-h:hidden"
          : "flex-row justify-center"
      } gap-6 ss-max-h:gap-3`}
    >
      {icons.map((icon) => {
        return <SocialMediaIcon link={icon.link} faIcon={icon.faIcon} />;
      })}
      {isVerticle && (
        <div
          className={`m-auto h-[100px] w-0.5 bg-slate ss-max-h:h-[75px]`}
        ></div>
      )}
    </div>
  );
};

export default IconGroup;