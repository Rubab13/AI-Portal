import { Link } from 'react-router-dom';
import styles from './AgentSlider.module.css';

import agentSuiteOne from '../assets/suite-landing-page-images/agentsuite1.jpg';
import agentSuiteTwo from '../assets/suite-landing-page-images/agentsuite2.jpg';
import agentSuiteThree from '../assets/suite-landing-page-images/agentsuite3.png';
import agentSuiteFour from '../assets/suite-landing-page-images/agentsuite4.png';

export default function AgentSlider() {
  const agents = [
    {
      id: 1,
      name: 'AI-Powered HRM & Recruitment System',
      description: 'A modern AI-powered recruitment system that automates hiring, screens candidates intelligently, and conducts voice-based interviews using advanced AI and cloud technologies.',
      image: agentSuiteOne
    },
    {
      id: 2,
      name: 'Contract Evaluator Agent',
      description: 'This is an AI-based multi-agent system that automatically evaluates vendor performance using data, detects risks, and provides a clear, explainable recommendation for decision-making.',
      image: agentSuiteTwo
    },
    {
      id: 3,
      name: 'Database Agent',
      description: 'A Database Agent is an AI agent that connects to a database, retrieves data, and performs queries or analysis based on user requests.',
      image: agentSuiteThree
    },
    {
      id: 4,
      name: 'Demand Forecasting Agent',
      description: 'An agent is an intelligent system that performs specific tasks autonomously by analyzing inputs, making decisions, and generating outputs without constant human intervention.',
      image: agentSuiteFour
    }
  ];

  const learnMoreRoutes = {
    1: '/agents/hrm-recruitment',
    2: '/agents/contract-evaluator',
    3: '/agents/database-agent',
    4: '/agents/demand-forecasting',
  };

  return (
      <section className={styles.agentSliderWrapper} id="agent-slider">
        <div className={styles.agentGridContainer}>
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={styles.agentGridCard}
            >
              <img
                src={agent.image}
                alt={agent.name}
                className={styles.agentGridImage}
              />

              <div className={styles.agentGridOverlay}>
                <div className={styles.agentGridContent}>
                  <h3 className={styles.agentGridName}>{agent.name}</h3>
                  <p className={styles.agentGridDescription}>{agent.description}</p>
                  <div className={styles.agentGridActions}>
                    <Link to={learnMoreRoutes[agent.id]} className={styles.agentGridCta}>
                      Learn More
                      <span className={styles.agentGridArrow}>→</span>
                    </Link>
                    <Link
                      to={learnMoreRoutes[agent.id]}
                      state={{ openVideoModal: true }}
                      className={styles.agentGridPreview}
                    >
                      Preview Video
                      <span className={styles.agentGridArrow}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
