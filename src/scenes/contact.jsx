import { motion } from "framer-motion";
import { Page } from "../util/page";
import { AnchorLinkButton } from "../components/button";
import MotionDiv from "../components/motionDiv";
import SectionTitle from "../components/sectionTitle";
import { contactSectionContent } from "./constants";
import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useToggleBodyScroll from "../hooks/useToggleBodyScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faXmark,
  faEnvelopeCircleCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ThreeDots } from "react-loader-spinner";

const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const EmailForm = ({ setIsFormOpen }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayFail, setDisplayFail] = useState(false);

  const inputStyles = `rounded-lg border border-slate bg-light-gray px-2 py-1  
  focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary`;

  useToggleBodyScroll();

  const sendEmail = (e) => {
    const formCurrent = form.current;

    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formCurrent, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            setDisplaySuccess(true);
            setIsSending(false);
          },
          (error) => {
            setDisplayFail(true);
            setIsSending(false);
            console.log(error);
          },
        );
    }, 2000);
  };

  return (
    <div
      className="absolute left-1/2 top-[5vh] z-40 flex h-[90vh] w-[90vw] -translate-x-1/2 flex-col
                  justify-center gap-4 overflow-hidden rounded-xl bg-bgc-light p-6 md:max-w-2xl"
    >
      <button
        className="absolute right-4 top-4"
        onClick={() => setIsFormOpen(false)}
        disabled={isSending}
      >
        <FontAwesomeIcon className="h-10 w-10 text-slate" icon={faXmark} />
      </button>
      {isSending && !displaySuccess && !displayFail && (
        <div className="flex justify-center">
          <ThreeDots
            visible={true}
            height="120"
            width="120"
            color="#06C8EF"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
      {!isSending && !displaySuccess && !displayFail && (
        <div>
          <FontAwesomeIcon
            className="mx-auto h-16 w-16 text-primary"
            icon={faEnvelope}
          />
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-2 rounded-xl bg-bgc-light"
          >
            <label className="text-left">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              required
              className={inputStyles}
            />

            <label className="mt-2 text-left">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              required
              className={inputStyles}
            />

            <label className="mt-2 text-left">Message</label>
            <textarea
              name="message"
              placeholder="Type your message.."
              required
              className={inputStyles + " h-40 resize-none"}
            />

            <button
              type="submit"
              disabled={isSending}
              className={"mx-auto mt-8 w-1/2 rounded-xl bg-primary px-4 py-2"}
            >
              Send
              <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
            </button>
          </form>
          <div className="mt-8">
            <div>or</div>
            <a
              className="cursor-pointer text-primary underline"
              href="mailto:zitaoyu.work@gmail.com"
            >
              click here to send me an email
            </a>
          </div>
        </div>
      )}
      {displaySuccess && (
        <div className="text-primary">
          <FontAwesomeIcon className="h-28 w-28" icon={faEnvelopeCircleCheck} />
          <h1 className="mt-4">Message Sent Successfully!</h1>
        </div>
      )}
      {displayFail && (
        <div className="text-lg text-primary">
          <FontAwesomeIcon className="h-28 w-28" icon={faExclamationCircle} />
          <h1 className="mt-4">
            Something went wrong, please try again later...
          </h1>
        </div>
      )}
    </div>
  );
};

const ContactSection = ({ setSelectedPage }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function OpenForm() {
    setIsFormOpen(true);
  }

  return (
    <motion.div
      className="m-auto mt-24 h-[90vh] md:mt-0 md:w-2/3"
      onViewportEnter={() => setSelectedPage(Page.Contact)}
      viewport={{ amount: 0.7 }}
    >
      <section
        id={Page.Contact}
        className="flex h-full flex-col justify-center gap-4 text-center"
      >
        <MotionDiv duration={0.4} y1={50} y2={0}>
          <SectionTitle
            index={4}
            title={contactSectionContent.sectionTitle}
            isCenter={true}
          />
        </MotionDiv>
        <MotionDiv delay={0.2} duration={0.4} y1={50} y2={0}>
          <p className="mx-auto mb-16 max-w-[600px] font-opensans text-slate">
            {contactSectionContent.intro}
          </p>
        </MotionDiv>
        <MotionDiv delay={0.4} duration={0.4} y1={50} y2={0}>
          <div className="flex justify-center">
            <AnchorLinkButton
              className="w-[160px] text-center"
              onClick={OpenForm}
              link={Page.Contact}
            >
              {contactSectionContent.button}
            </AnchorLinkButton>
          </div>
        </MotionDiv>
        {isFormOpen && (
          // overlay window
          <div className="overlay z-30 bg-gray-transparent-blur">
            <MotionDiv duration={0.4} y1={50} y2={0}>
              <EmailForm setIsFormOpen={setIsFormOpen} />
            </MotionDiv>
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default ContactSection;
