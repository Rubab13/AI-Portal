import Header from './Header';
import Footer from './Footer';
import AgentDetailTemplate from './AgentDetailTemplate';
import agentSuiteOne from '../assets/agentsuite1.jpg';
import agentSuiteTwo from '../assets/agentsuite2.jpg';
import agentSuiteFour from '../assets/agentsuite4.png';
import suiteVideo from '../assets/suite-04-forecasting/video.mp4';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiOpenai,
  SiRedis,
  SiPytorch
} from 'react-icons/si';

export default function AgentDemandForecastingPage() {
  const features = [
    {
      name: 'Trend Prediction & Modeling',
      description: 'Leverage historical data to predict future demand patterns with high accuracy.',
      icon: '📉'
    },
    {
      name: 'Seasonality Detection',
      description: 'Automatically identify and analyze seasonal patterns in your data.',
      icon: '🔄'
    },
    {
      name: 'Planning Support Dashboards',
      description: 'Interactive dashboards to support inventory and operational planning.',
      icon: '📊'
    },
    {
      name: 'Scenario Analysis',
      description: 'Run multiple scenarios to prepare for different business conditions.',
      icon: '🎯'
    }
  ];

  const galleryImages = [agentSuiteOne, agentSuiteTwo, agentSuiteFour];

  const techStack = [
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Express', Icon: SiExpress },
    { name: 'Python', Icon: SiPython },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Docker', Icon: SiDocker },
    { name: 'Kubernetes', Icon: SiKubernetes },
    { name: 'Kafka', Icon: SiApachekafka },
    { name: 'OpenAI API', Icon: SiOpenai },
    { name: 'Redis', Icon: SiRedis },
    { name: 'PyTorch', Icon: SiPytorch }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AgentDetailTemplate 
          suiteNumber="04"
          title="Demand Forecasting Agent"
          description="Predict the future with confidence. This suite analyzes historical signals and business context to forecast demand patterns, helping you prepare operations with greater accuracy."
          features={features}
          videoSrc={suiteVideo}
          galleryImages={galleryImages}
          techStack={techStack}
        />
      </main>
      <Footer />
    </div>
  );
}
