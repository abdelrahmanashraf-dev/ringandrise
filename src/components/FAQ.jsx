import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "Why should I choose you?",
        answer: "We are a real estate only cold calling company built by acquisition professionals. Having worked directly with investors, we understand what a real motivated seller looks like. Our clients consistently see strong returns, many achieving 10x ROI or more because we focus on quality, not volume."
    },
    {
        question: "Can I choose which caller works on my campaign?",
        answer: "Yes. You can select the caller assigned to your campaign."
    },
    {
        question: "Do you provide the data, or do I need my own list?",
        answer: "We do both. We can supply high-accuracy, real estate-specific data, or, if you already have a list, our team can dial it on your behalf."
    },
    {
        question: "How does your quality system work?",
        answer: (
            <div className="faq-list-answer">
                <p>We use a three-layer quality system designed to eliminate tire kickers:</p>
                <ul>
                    <li><strong>Caller Level:</strong> Every caller goes through QA-focused training to identify motivation, not just interest.</li>
                    <li><strong>Quality Team Review:</strong> Experienced ex-callers and lead managers manually review and verify leads.</li>
                    <li><strong>AI Validation Layer:</strong> An AI module trained on thousands of real calls adds an additional verification layer.</li>
                </ul>
                <p>This system makes it extremely difficult for unmotivated leads to pass through.</p>
            </div>
        )
    },
    {
        question: "Can you guarantee a closing deal within the first month?",
        answer: "Well, almost all of our clients did. We guarantee the highest-quality leads you'll ever see, making closing deals easier than ever."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="faq-title"
                    >
                        Frequently Asked <span>Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="faq-subtitle"
                    >
                        Everything you need to know about our real estate cold calling services.
                    </motion.p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                                    size={20}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer-wrapper"
                                    >
                                        <div className="faq-answer">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
