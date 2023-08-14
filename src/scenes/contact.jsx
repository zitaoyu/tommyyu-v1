import { motion } from "framer-motion";
import { Page } from "../util/page";
import { LinkButton } from "../components/button";
import MotionDiv from "../components/motionDiv";
import SectionTitle from "../components/sectionTitle";
import { contactSectionContent } from "./constants";

const ContactSection = ({ setSelectedPage }) => {
  return (
    <motion.div
      className="m-auto mt-24 h-[80vh] md:mt-0 md:w-2/3"
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
            <LinkButton
              className="w-[160px] text-center"
              link={"mailto:zitaoyu.work@gmail.com"}
            >
              {contactSectionContent.button}
            </LinkButton>
          </div>
        </MotionDiv>
      </section>
    </motion.div>
  );
};

export default ContactSection;
