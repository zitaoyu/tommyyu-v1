import { motion } from "framer-motion";

const DummySection = ({ page, setSelectedPage }) => {
  return (
    <motion.div
      className="mx-auto h-full w-5/6 max-w-[1920px]"
      onViewportEnter={() => setSelectedPage(page)}
      viewport={{ amount: 0.7 }}
    >
      <section
        className="flex h-full flex-col justify-center text-primary"
        id={page}
      >
        <h1 className="text-center font-opensans text-4xl">
          {page} page is under construction...
        </h1>
      </section>
    </motion.div>
  );
};
export default DummySection;
