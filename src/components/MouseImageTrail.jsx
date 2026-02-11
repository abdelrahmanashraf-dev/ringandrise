import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { MousePointer2 } from "lucide-react";
import "./MouseImageTrail.css";

export const MouseImageTrail = () => {
    return (
        <MouseImageTrailWrapper
            renderImageBuffer={50}
            rotationRange={25}
            images={[
                "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop",
            ]}
        >
            <section className="trail-section">
                <p className="trail-label">
                    <MousePointer2 />
                    <span>Hover me</span>
                </p>
            </section>
        </MouseImageTrailWrapper>
    );
};

const MouseImageTrailWrapper = ({
    children,
    images,
    renderImageBuffer,
    rotationRange,
}) => {
    const [scope, animate] = useAnimate();

    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;

        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderImageBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage();
        }
    };

    const calculateDistance = (x1, y1, x2, y2) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        return distance;
    };

    const renderNextImage = () => {
        const imageIndex = imageRenderCount.current % images.length;
        const selector = `[data-mouse-move-index="${imageIndex}"]`;

        const el = document.querySelector(selector);

        if (el && scope.current) {
            const rect = scope.current.getBoundingClientRect();
            // Calculate position relative to the container
            const relativeX = lastRenderPosition.current.x - rect.left;
            const relativeY = lastRenderPosition.current.y - rect.top;

            el.style.top = `${relativeY}px`;
            el.style.left = `${relativeX}px`;
            el.style.zIndex = imageRenderCount.current.toString();

            const rotation = Math.random() * rotationRange;

            animate(
                selector,
                {
                    opacity: [0, 1],
                    transform: [
                        `translate(-50%, -25%) scale(0.5) ${imageIndex % 2
                            ? `rotate(${rotation}deg)`
                            : `rotate(-${rotation}deg)`
                        }`,
                        `translate(-50%, -50%) scale(1) ${imageIndex % 2
                            ? `rotate(-${rotation}deg)`
                            : `rotate(${rotation}deg)`
                        }`,
                    ],
                },
                { type: "spring", damping: 15, stiffness: 200 }
            );

            animate(
                selector,
                {
                    opacity: [1, 0],
                },
                { ease: "linear", duration: 0.5, delay: 5 }
            );

            imageRenderCount.current = imageRenderCount.current + 1;
        }
    };

    return (
        <div
            ref={scope}
            className="trail-wrapper relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {children}

            {images.map((img, index) => (
                <img
                    className="trail-image"
                    src={img}
                    alt={`Mouse move image ${index}`}
                    key={index}
                    data-mouse-move-index={index}
                />
            ))}
        </div>
    );
};

export default MouseImageTrail;
