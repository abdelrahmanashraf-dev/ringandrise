import React from 'react';
import { Voicemail, Users, Zap, BarChart3, ShieldCheck, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "AI Power Dialing",
      desc: "Dial up to 300 leads per hour with our predictive AI that filters out bad numbers and busy signals."
    },
    {
      icon: <Voicemail size={24} />,
      title: "Smart Voicemail Drop",
      desc: "Leave pre-recorded, personalized voicemails with a single click while you move to the next call."
    },
    {
      icon: <Users size={24} />,
      title: "CRM Sync",
      desc: "Two-way integration with Salesforce, HubSpot, and Pipedrive. Never manually log a call again."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Real-time Analytics",
      desc: "Track connection rates, talk time, and meetings booked in real-time dashboards."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Compliance Guard",
      desc: "Built-in protection against over-dialing and DNC list filtering to keep you compliant."
    },
    {
      icon: <Globe size={24} />,
      title: "Local Presence",
      desc: "Automatically display a local number to your prospects to increase pickup rates by up to 40%."
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Why Ring And Rise !</h2>
          <p>Everything you need to crush your quota.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .section-header p {
          color: var(--text-secondary);
          font-size: 1.125rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.1);
        }
        
        .feature-icon {
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        .feature-card h3 {
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }
        
        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Features;
