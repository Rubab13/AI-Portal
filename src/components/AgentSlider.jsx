import { Link } from 'react-router-dom';
import agentOneImage from '../assets/1.jpg';
import agentTwoImage from '../assets/2.jpg';
import agentThreeImage from '../assets/3.jpg';

import agentSuiteOne from '../assets/agentsuite1.jpg';
import agentSuiteTwo from '../assets/agentsuite2.jpg';
import agentSuiteThree from '../assets/agentsuite3.png';
import agentSuiteFour from '../assets/agentsuite4.png';

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

  const styles = `
    .agent-slider-wrapper {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      background: #000000;
      display: flex;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    .agent-grid-container {
      display: flex;
      gap: 0;
      width: 100%;
      height: 100%;
      flex: 1;
    }

    .agent-grid-card {
      position: relative;
      border: none;
      overflow: hidden;
      cursor: pointer;
      background: #f5f5f5;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      flex: 1;
      min-width: 0;
      height: 100%;
    }

    .agent-grid-card:hover {
      flex: 4;
    }

    .agent-grid-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease, filter 0.5s ease;
      filter: brightness(0.8);
    }

    .agent-grid-card:hover .agent-grid-image {
      transform: scale(1.05);
      filter: brightness(1);
    }

    .agent-grid-overlay {
      position: absolute;
      inset: 0;
      background: transparent;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 2rem;
      opacity: 0;
      transition: opacity 0.5s ease;
      text-align: left;
    }

    .agent-grid-card:hover .agent-grid-overlay {
      opacity: 1;
    }

    .agent-grid-content {
      width: 100%;
      max-width: 95%;
      transform: translateY(40px);
      transition: transform 0.5s ease;
    }

    .agent-grid-card:hover .agent-grid-content {
      transform: translateY(0);
    }

    .agent-grid-name {
      font-size: 2.2rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 1.2rem 0;
      line-height: 1.2;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .agent-grid-description {
      font-size: 1.1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.95);
      margin: 0 0 1.8rem 0;
      max-width: 85%;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .agent-grid-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
    }

    .agent-grid-cta {
      padding: 0.9rem 2rem;
      border-radius: 0.7rem;
      border: 2px solid rgba(255, 255, 255, 0.9);
      background: transparent;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.05rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      transition: all 0.3s ease;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .agent-grid-preview {
      padding: 0.9rem 2rem;
      border-radius: 0.7rem;
      border: 2px solid rgba(255, 255, 255, 0.35);
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
      font-weight: 700;
      font-size: 1.05rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      transition: all 0.3s ease;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      text-decoration: none;
    }

    .agent-grid-cta:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: #ffffff;
    }

    .agent-grid-preview:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.7);
    }

    .agent-grid-arrow {
      transition: transform 0.3s ease;
    }

    .agent-grid-cta:hover .agent-grid-arrow {
      transform: translateX(5px);
    }

    .agent-grid-preview:hover .agent-grid-arrow {
      transform: translateX(5px);
    }

    @media (max-width: 1200px) {
      .agent-grid-card:hover {
        flex: 2;
      }

      .agent-grid-name {
        font-size: 1.6rem;
      }

      .agent-grid-description {
        font-size: 0.95rem;
      }

      .agent-grid-preview,
      .agent-grid-cta {
        font-size: 0.95rem;
      }
    }

    @media (max-width: 768px) {
      .agent-slider-wrapper {
        height: auto;
        min-height: 100vh;
      }

      .agent-grid-name {
        font-size: 1.4rem;
      }

      .agent-grid-description {
        font-size: 0.85rem;
        line-height: 1.5;
      }

      .agent-grid-cta {
        padding: 0.7rem 1.5rem;
        font-size: 0.95rem;
      }

      .agent-grid-preview {
        padding: 0.7rem 1.5rem;
        font-size: 0.95rem;
      }
    }

    @media (max-width: 640px) {
      .agent-grid-name {
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
      }

      .agent-grid-description {
        font-size: 0.8rem;
        margin-bottom: 1rem;
        line-height: 1.45;
      }

      .agent-grid-actions {
        gap: 0.6rem;
      }

      .agent-grid-cta {
        padding: 0.6rem 1.2rem;
        font-size: 0.85rem;
      }

      .agent-grid-preview {
        padding: 0.6rem 1.2rem;
        font-size: 0.85rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="agent-slider-wrapper" id="agent-slider">
        <div className="agent-grid-container" style={{height: "100vh"}}>
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="agent-grid-card"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="agent-grid-image"
              />

              <div className="agent-grid-overlay">
                <div className="agent-grid-content">
                  <h3 className="agent-grid-name">{agent.name}</h3>
                  <p className="agent-grid-description">{agent.description}</p>
                  <div className="agent-grid-actions">
                    <Link to={learnMoreRoutes[agent.id]} className="agent-grid-cta">
                      Learn More
                      <span className="agent-grid-arrow">→</span>
                    </Link>
                    <Link
                      to={learnMoreRoutes[agent.id]}
                      state={{ openVideoModal: true }}
                      className="agent-grid-preview"
                    >
                      Preview Video
                      <span className="agent-grid-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
