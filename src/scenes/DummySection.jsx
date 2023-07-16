import { motion } from "framer-motion";

const DummySection = ({ page, setSelectedPage }) => {
  return (
    <motion.div
      className="h-full w-5/6 max-w-[1920px] mx-auto "
      amount="all"
      onViewportEnter={() => setSelectedPage(page)}
    >
      <section
        className="h-full flex flex-col justify-center text-cyan"
        id={page}
      >
        <h1 className="font-opensans text-4xl text-center">
          {page} page is under construction...
        </h1>
      </section>
    </motion.div>
  );
};
export default DummySection;
