import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container stats-container">
                <div className="stats-header">
                    <h2 className="stats-title">Proven Results</h2>
                </div>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3 className="stat-value">50+</h3>
                        <p className="stat-label">Happy Clients</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="stat-value">Data</h3>
                        <p className="stat-label">Driven Approach</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="stat-value">+200</h3>
                        <p className="stat-label">Closed Deals From Our Calls</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
