import { motion } from "framer-motion";
import React, { useState } from "react";

export default function UnderlineHoverAnimation({ children }) {
  const [isHover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <motion.div
        style={{ height: 2, backgroundColor: "black", margin: "0 auto" }}
        animate={{ width: isHover ? "100%" : 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />
    </div>
  );
}
