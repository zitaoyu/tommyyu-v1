import { motion } from "framer-motion";
import { Page } from "../util/page";
import { LinkButton } from "../components/Button";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";

const ExperienceSection = ({ setSelectedPage }) => {
  return (
    <motion.div
      classNameName="mx-auto"
      onViewportEnter={() => setSelectedPage(Page.Contact)}
      viewport={{ amount: 0.7 }}
    >
      <section id={Page.Experience} classNameName="py-10 sm:py-32">
        <MotionDiv duration={0.4} y1={50} y2={0}>
          <SectionTitle index={2} title={"Experience"} isCenter={true} />
        </MotionDiv>

        {/* TimeLine Container */}

        <div className="container mx-auto h-full w-full">
          <div className="wrap relative h-full overflow-hidden p-10">
            <div className="border-2-2 absolute left-1/2 h-full border border-cyan"></div>

            {/* Right timeline item */}
            <div className="mb-8 flex w-full items-center justify-between">
              {/* Blank space */}
              <div className="order-1 w-5/12"></div>
              {/* Dot */}
              <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full shadow-xl">
                <h1 className="m-[6px] rounded-xl border-[12px] bg-navy">1</h1>
              </div>
              {/* Container */}
              <div className="order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 text-white shadow-xl">
                <h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. <br /> Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
              </div>
            </div>

            {/* Left timeline item (flex-row-reverse) */}
            <div className="mb-8 flex w-full flex-row-reverse items-center justify-between">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
              </div>
              <div className="order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 text-white shadow-xl">
                <h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExperienceSection;
