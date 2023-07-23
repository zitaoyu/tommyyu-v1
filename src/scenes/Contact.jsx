import { motion } from "framer-motion";
import { Page } from "../util/page";
import { LinkButton } from "../components/Button";
import MotionDiv from "../components/MotionDiv";

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
          <h3 className="md-4 font-robotomono text-3xl font-semibold text-light-slate sm:text-4xl md:tracking-tight">
            <span className="mr-1 text-cyan">[4].</span>Contact Info
          </h3>
        </MotionDiv>
        <MotionDiv delay={0.2} duration={0.4} y1={50} y2={0}>
          <p className="mx-auto mb-16 max-w-[600px] font-opensans text-slate">
            Since you have reached this part of the page, I want to thank you
            for checking out my page. I'm always open to new oppuntunities and
            conversations, feel free to say hello to me.
          </p>
        </MotionDiv>
        <MotionDiv delay={0.4} duration={0.4} y1={50} y2={0}>
          <div className="flex justify-center">
            <LinkButton
              className="w-[160px] text-center"
              link={"mailto:zitaoyu.work@gmail.com"}
            >
              Say Hello
            </LinkButton>
          </div>
        </MotionDiv>
      </section>
    </motion.div>
  );
};

export default ContactSection;
