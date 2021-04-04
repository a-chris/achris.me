import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { useIntersection } from "react-use";

const VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, x: 0, opacity: 1 },
};

export default function FadeIn({ children }) {
  const [show, setShow] = useState(false);

  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // triggered when 1/3 of the element is visible
  });

  const isVisible = useMemo(
    () => intersection && intersection.intersectionRatio > 0,
    [intersection]
  );

  useEffect(() => {
    if (!show && isVisible) {
      // animate only the first time
      // e.g. not if the user scrolls down and then scroll up again
      setShow(isVisible);
    }
  }, [isVisible]);

  return (
    <motion.div
      ref={intersectionRef}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      transition={{
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      }}
      variants={VARIANTS}
    >
      {children}
    </motion.div>
  );
}
