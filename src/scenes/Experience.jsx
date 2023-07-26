import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";
import useMediaQuery from "../hooks/useMediaQuery";

const timelineItems = [
  {
    title: "Lorem Ipsum",
    content: `Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book`,
  },
  {
    title: "Lorem Ipsum",
    content: `Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book`,
  },
  {
    title: "Lorem Ipsum",
    content: `Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book`,
  },
  {
    title: "Lorem Ipsum",
    content: `Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book`,
  },
  {
    title: "Lorem Ipsum",
    content: `Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book`,
  },
  {
    title: "Lorem Ipsum",
    content: `Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book`,
  },
];

const ExperienceSection = ({ setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  return (
    <motion.div
      classNameName="mx-auto"
      onViewportEnter={() => setSelectedPage(Page.Contact)}
      viewport={{ amount: 0.7 }}
    >
      <section id={Page.Experience} className="py-10 sm:py-32">
        <MotionDiv className="mb-10" duration={0.4} y1={50} y2={0}>
          <SectionTitle index={2} title={"Experience"} isCenter={true} />
        </MotionDiv>
        <div className="container mx-auto h-full w-full py-10 md:p-10">
          <div className="relative h-full overflow-hidden">
            {/* Timeline */}
            <div className="absolute left-[20px] md:left-1/2 h-[20vh] w-[2px] bg-cyan bg-gradient-to-t from-cyan to-gray"></div>
            <div className="absolute top-[20vh] left-[20px] md:left-1/2 h-full w-[2px] bg-cyan"></div>
            <div className="absolute bottom-0 left-[20px] md:left-1/2 h-[20vh] w-[2px] bg-cyan bg-gradient-to-b from-cyan to-gray"></div>

            {/* Timeline Items */}
            <div className="my-20">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 !== 0;
                return (
                  <div
                    className={`mb-8 flex w-full items-center md:justify-between ${
                      isLeft && "md:flex-row-reverse"
                    }`}
                  >
                    {/* Blank space */}
                    {isDesktop && <div className="order-1 w-5/12"></div>}
                    {/* Dot */}
                    <div class="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-cyan shadow-xl">
                      <h1 class="m-auto font-semibold text-gray">{index}</h1>
                    </div>
                    {/* Container */}
                    <div className="ml-4 md:ml-0 order-1 w-[calc(100%-60px)] md:w-5/12 rounded-lg bg-navy px-6 py-4 text-light-slate shadow-xl">
                      <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExperienceSection;
