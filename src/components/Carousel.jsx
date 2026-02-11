import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame, useVelocity, useSpring } from "framer-motion";

// Simple wrap implementation
function wrapNum(min, max, v) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function Carousel({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrapNum(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
            <style>{`
        .parallax {
          overflow: hidden;
          letter-spacing: -2px;
          line-height: 0.8;
          margin: 0;
          white-space: nowrap;
          display: flex;
          flex-wrap: nowrap;
        }
        .scroller {
          font-weight: 600;
          text-transform: uppercase;
          font-size: 64px;
          display: flex;
          white-space: nowrap;
          display: flex;
          flex-wrap: nowrap;
          color: rgba(255, 255, 255, 0.1);
        }
        .scroller span {
          display: block;
          margin-right: 30px;
        }
      `}</style>
        </div>
    );
}

export default Carousel;
