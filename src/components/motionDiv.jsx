import { motion } from "framer-motion";

const MotionDiv = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: props.viewAmount ? props.viewAmount : 0.5,
      }}
      transition={{ delay: props.delay, duration: props.duration }}
      variants={{
        hidden: { opacity: 0, x: props.x1, y: props.y1 },
        visible: { opacity: 1, x: props.x2, y: props.y2 },
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionDiv;
