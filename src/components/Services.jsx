import React from 'react';
import { Building2, Search, CalendarCheck, Database, PhoneCall, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const fadeUp = {
    hidden: { y: 24 },
    visible: (delay = 0) => ({
        y: 0,
        transition: { duration: 0.5, delay, ease: 'easeOut' }
    })
};

const services = [
    {
        title: "Real Estate",
        description: "Specialized lead generation and support customized for real estate professionals.",
        icon: <Home size={24} className="service-icon" />
    },
    {
        title: "Seller Lead Generation",
        description: "Targeted outreach to connect you with motivated property sellers.",
        icon: <Building2 size={24} className="service-icon" />
    },
    {
        title: "Skiptracing",
        description: "High-accuracy affordable data. Better reach. Better results.",
        icon: <Search size={24} className="service-icon" />
    },
    {
        title: "Appointment Setting",
        description: "Seamlessly booking highly qualified appointments directly on your calendar.",
        icon: <CalendarCheck size={24} className="service-icon" />
    },
    {
        title: "CRM Setup",
        description: "We setup a designed CRM specifically for real estate workflows, ensuring no lead gets lost.",
        icon: <Database size={24} className="service-icon" />
    },
    {
        title: "Lead Nurturing & Follow Up",
        description: "Consistent, multi-channel follow up to turn prospects into closed deals.",
        icon: <PhoneCall size={24} className="service-icon" />
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="services-title"
                    >
                        Real Estate <span>Services</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.1}
                        viewport={{ once: true, amount: 0.2 }}
                        className="services-subtitle"
                    >
                        Comprehensive solutions designed to supercharge your deal flow and scale your real estate business.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={index * 0.1}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            {service.description && <p className="service-card-desc">{service.description}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
