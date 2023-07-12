import { motion } from "framer-motion";

// motion.div wrapper
// const MotionDiv = ({
//   delay = 0,
//   duration = 0.5,
//   x1 = 0,
//   x2 = 0,
//   y1 = 0,
//   y2 = 0,
// }) => {
const MotionDiv = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: props.delay, duration: props.duration }}
      variants={{
        hidden: { opacity: 0, x: props.x1, y: props.y1 },
        visible: { opacity: 1, x: props.x2, y: props.y2 },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionDiv;
