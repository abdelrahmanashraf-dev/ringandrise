import { Building2, Search, CalendarCheck, Database, PhoneCall, Home, CheckCircle2, FileText, Eye, ShieldCheck } from 'lucide-react';
import React from 'react';
import { Headset, UserCheck, Target, Link, Trophy } from 'lucide-react';

// ─── Services ───────────────────────────────────────────────────────────────
export const services = [
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

// ─── Why Ring And Rise (Good Cards) ─────────────────────────────────────────
export const goodCards = [
    {
        icon: <CheckCircle2 size={24} color="white" />,
        title: 'Native-Level Communication',
        delay: 0.1,
        text: "While many agencies use callers with heavy accents that hurt credibility and conversion rates, we exclusively employ callers with native-like accents who sound natural, professional, and trustworthy. First impressions matter—especially in cold calling services."
    },
    {
        icon: <FileText size={24} color="white" />,
        title: 'Data Included. No Excuses',
        delay: 0.2,
        text: "We provide the data. No complaining about your list, no shifting blame. Our real estate cold calling experts work with proven, high-quality data sources so you can focus on closing deals, not sourcing contacts."
    },
    {
        icon: <Eye size={24} color="white" />,
        title: 'Complete Transparency',
        delay: 0.3,
        text: "You'll receive weekly performance audits that show exactly what we're doing, when we're working, and the results we're generating. Every call, every conversation, every qualified lead—fully documented and accessible to you."
    },
    {
        icon: <ShieldCheck size={24} color="white" />,
        title: 'Results Guaranteed',
        delay: 0.4,
        text: "Here's our promise: if we don't deliver the number of leads we committed to, we continue working at no additional cost until we hit your target. No fine print, no loopholes, just a straightforward guarantee that puts your success first."
    },
];

// ─── FAQ Items ───────────────────────────────────────────────────────────────
export const faqItems = [
    {
        question: "How quickly can you start generating leads?",
        answer: "We can have your campaign up and running within 5-7 business days. This includes caller selection, script customization, data preparation, and CRM setup if needed."
    },
    {
        question: "What makes your leads different from other services?",
        answer: "Every lead goes through our triple-layer quality control: agent validation, internal QA team review, and AI-powered scoring. Only leads that pass all three layers reach your pipeline."
    },
    {
        question: "Do I need to provide my own data?",
        answer: "No. We provide high-quality, targeted data as part of our service. However, if you have existing lists you'd like us to work with, we can accommodate that too."
    },
    {
        question: "What happens if you don't hit the guaranteed lead count?",
        answer: "We continue working at no additional cost until we deliver the committed number of qualified leads. No excuses, no fine print—just results."
    },
    {
        question: "How do you ensure caller quality?",
        answer: "All our callers go through a rigorous selection process focusing on native-level English proficiency, real estate knowledge, and proven sales skills. Each caller receives ongoing training and performance monitoring."
    },
    {
        question: "Can I listen to call recordings?",
        answer: "Yes. Full transparency is one of our core values. You'll have access to call recordings, weekly performance reports, and real-time tracking through your dedicated dashboard."
    },
];

// ─── Lead Journey Steps ──────────────────────────────────────────────────────
export const journeySteps = [
    {
        title: "Maximizing Efficiency with Advanced Technology",
        description: "We use multi-line dialer systems (ReadyMode) that eliminate manual dialing and maximize agent talk time. This outbound calling process ensures your investment goes toward actual conversations with property owners, not wasted time between calls.",
        icon: <Headset size={32} className="journey-icon" />
    },
    {
        title: "Stage 1: Expert Lead Qualification",
        description: "When a property owner expresses interest in selling, our trained agents immediately begin the lead qualification process. We ask targeted questions based on your specific criteria: Asking price, condition, number of beds and baths.\n\nOur real estate cold calling specialists are extensively trained to distinguish between genuinely motivated sellers and homeowners simply seeking a free property appraisal. This critical filtering happens in real-time, saving you from wasting appointments on unqualified prospects.",
        icon: <UserCheck size={32} className="journey-icon" />
    },
    {
        title: "Stage 2: Capturing Motivation & Timeline",
        description: "Once basic qualifications are met, we dive deeper into seller motivation. Why are they selling? What's driving their decision? We capture the story behind the sale: divorce, relocation, financial distress, inherited property, or other compelling reasons.\n\nWe then validate that their timeline aligns with yours. A seller who 'might consider selling next year' doesn't reach your pipeline. Only prospects ready to move within your preferred timeframe advance to the next stage.",
        icon: <Target size={32} className="journey-icon" />
    },
    {
        title: "Stage 3: Triple-Layer Quality Control",
        description: "This is where our system separates us from typical cold calling services:\n\n• Layer 1: Agent Validation\nYour dedicated caller conducts the initial qualification and documentation.\n\n• Layer 2: Internal Quality Team Review\nOur specialized quality assurance team validates every detail, ensuring accuracy and completeness before the lead moves forward.\n\n• Layer 3: AI-Powered Scoring\nEach lead passes through our proprietary AI scoring module, trained on thousands of successful real estate lead generation calls. The system assigns a quality score from 1 to 10 based on conversation patterns, motivation indicators, and historical conversion data.",
        icon: <ShieldCheck size={32} className="journey-icon" />
    },
    {
        title: "Seamless CRM Integration",
        description: "Only leads that pass all three quality layers are delivered to your system. We integrate directly with your existing CRM, ensuring fast lead delivery and immediate follow-up capability.\n\nDon't have a CRM yet? Our technical team will set one up for you, at no additional cost, so you can start tracking and converting leads from day one.",
        icon: <Link size={32} className="journey-icon" />
    },
    {
        title: "The Result: Only the Best Leads Reach Your Team",
        description: "By the time a lead lands in your pipeline, it's been vetted by experienced agents, validated by our quality team, and scored by AI trained on real conversion data. You get qualified leads you can actually close, not just names and numbers.",
        icon: <Trophy size={32} className="journey-icon" />,
        isHighlight: true
    }
];

// ─── Call Samples ─────────────────────────────────────────────────────────────
export const callSamples = [
    { id: 1, name: 'Adam',   role: 'Senior Cold Caller',          src: new URL('../calls/Adam.mp3',   import.meta.url).href },
    { id: 2, name: 'Sam',    role: 'Real Estate Outreach Expert', src: new URL('../calls/Sam.mp3',    import.meta.url).href },
    { id: 3, name: 'Kevin',  role: 'Lead Generation Specialist',  src: new URL('../calls/Kevin.mp3',  import.meta.url).href },
    { id: 4, name: 'Mia',    role: 'Appointment Setting Expert',  src: new URL('../calls/Mia.mp3',    import.meta.url).href },
    { id: 5, name: 'Mike',   role: 'Cold Outreach Specialist',    src: new URL('../calls/Mike.mp3',   import.meta.url).href },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
    { value: 50,  suffix: '+',  label: 'Happy Clients',               delay: 0.1 },
    { value: 100, suffix: '%',  label: 'Data Driven Approach',         delay: 0.2 },
    { value: 200, prefix: '+',  label: 'Closed Deals From Our Calls',  delay: 0.3 },
];
