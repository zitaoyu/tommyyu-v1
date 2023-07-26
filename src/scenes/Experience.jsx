import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";
import useMediaQuery from "../hooks/useMediaQuery";

const ExperienceSection = ({ setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  return (
    <motion.div
      classNameName="mx-auto"
      onViewportEnter={() => setSelectedPage(Page.Contact)}
      viewport={{ amount: 0.7 }}
    >
      <section id={Page.Experience} className="py-10 sm:py-32">
        <MotionDiv duration={0.4} y1={50} y2={0}>
          <SectionTitle index={2} title={"Experience"} isCenter={true} />
        </MotionDiv>

        {isDesktop ? (
          <div className="container mx-auto h-full w-full">
            <div className="relative h-full overflow-hidden p-10">
              <div className="absolute left-1/2 h-full border border-cyan"></div>

              {/* Right timeline item */}
              <div className="mb-8 flex w-full items-center justify-between">
                {/* Blank space */}
                <div className="order-1 w-5/12"></div>
                {/* Dot */}
                <div class="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-cyan shadow-xl">
                  <h1 class="mx-auto text-lg font-semibold text-gray">1</h1>
                </div>
                {/* Container */}
                <div className="order-1 w-5/12 rounded-lg bg-navy px-6 py-4 text-light-slate shadow-xl">
                  <h3 className="mb-3 text-xl font-bold">Lorem Ipsum</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. <br /> Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              {/* Left timeline item (flex-row-reverse) */}
              <div className="mb-8 flex w-full flex-row-reverse items-center justify-between">
                <div className="order-1 w-5/12"></div>
                <div class="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-cyan shadow-xl">
                  <h1 class="mx-auto text-lg font-semibold text-gray">2</h1>
                </div>
                <div className="order-1 w-5/12 rounded-lg bg-navy px-6 py-4 text-light-slate shadow-xl">
                  <h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </motion.div>
  );
};

export default ExperienceSection;
