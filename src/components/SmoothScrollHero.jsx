import React, { useRef } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { PhoneCall, ArrowRight, Zap, Globe, BarChart3, Lock } from "lucide-react";
import "./SmoothScrollHero.css";

export const SmoothScrollHero = () => {
    return (
        <div className="smooth-scroll-wrapper">
            <ReactLenis
                root
                options={{
                    lerp: 0.05,
                }}
            >
                <Nav />
                <Hero />
                <Schedule />
            </ReactLenis>
        </div>
    );
};

const Nav = () => {
    return (
        <nav className="ss-nav">
            <div className="flex items-center gap-2">
                <PhoneCall className="ss-nav-logo" />
                <span className="font-bold text-xl tracking-tight">RingRise</span>
            </div>
            <button
                onClick={() => {
                    document.getElementById("launch-schedule")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className="ss-nav-btn"
            >
                View Roadmap <ArrowRight size={16} />
            </button>
        </nav>
    );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="ss-hero"
        >
            <CenterImage />
            <ParallaxImages />
            <div className="ss-gradient-overlay" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <motion.div
            className="ss-center-image"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    return (
        <div className="ss-parallax-container">
            <ParallaxImg
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                alt="Analytics Dashboard"
                start={-200}
                end={200}
                className="ss-parallax-img"
                style={{ width: '30%' }}
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop"
                alt="Team Collaboration"
                start={200}
                end={-250}
                className="ss-parallax-img"
                style={{ margin: '0 auto', width: '50%' }}
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2670&auto=format&fit=crop"
                alt="Mobile App"
                start={-200}
                end={200}
                className="ss-parallax-img"
                style={{ marginLeft: 'auto', width: '35%' }}
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                alt="Global Connection"
                start={0}
                end={-500}
                className="ss-parallax-img"
                style={{ marginLeft: '10%', width: '40%' }}
            />
        </div>
    );
};

const ParallaxImg = ({ className, alt, src, start, end, style }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={ref}
            style={{ transform, opacity, ...style }}
        />
    );
};

const Schedule = () => {
    return (
        <section
            id="launch-schedule"
            className="ss-schedule"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                Integration Plan
            </motion.h1>
            <ScheduleItem title="Salesforce Deep Sync" date="Completed" location="Live" icon={<Globe size={18} />} />
            <ScheduleItem title="HubSpot Bi-Directional" date="Oct 2024" location="Beta" icon={<Zap size={18} />} />
            <ScheduleItem title="Zoho CRM Native" date="Dec 2024" location="In Dev" icon={<BarChart3 size={18} />} />
            <ScheduleItem title="Pipedrive Automation" date="Q1 2025" location="Planned" icon={<Lock size={18} />} />
        </section>
    );
};

const ScheduleItem = ({ title, date, location, icon }) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="ss-schedule-item"
        >
            <div>
                <p className="ss-item-title">{title}</p>
                <div className="flex items-center gap-2">
                    <span className="ss-item-date">{date}</span>
                </div>
            </div>
            <div className="ss-item-location">
                {icon}
                <p>{location}</p>
            </div>
        </motion.div>
    );
};
