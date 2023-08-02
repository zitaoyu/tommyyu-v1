import { motion } from "framer-motion";
import { Page } from "../util/page";
import { LinkButton } from "../components/Button";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";

const contactSectionContent = {
  sectionTitle: "Contact Me",
  intro: `Since you have reached this part of the page, I want to thank you
          for checking out my page. I'm always open to new oppuntunities and
          conversations, feel free to say hello to me.`,
  button: "Say Hello",
};

const ContactSection = ({ setSelectedPage }) => {
  return (
    <motion.div
      className="m-auto min-h-[80vh] md:w-2/3"
      onViewportEnter={() => setSelectedPage(Page.Contact)}
      viewport={{ amount: 0.7 }}
    >
      <section
        id={Page.Contact}
        className="flex min-h-[80vh] flex-col justify-center gap-4 text-center"
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
