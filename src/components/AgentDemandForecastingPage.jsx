import Header from './Header';
import Footer from './Footer';
import AgentDetailTemplate from './AgentDetailTemplate';
import agentSuiteOne from '../assets/agentsuite1.jpg';
import agentSuiteTwo from '../assets/agentsuite2.jpg';
import agentSuiteFour from '../assets/agentsuite4.png';
import suiteVideo from '../assets/suite-04-forecasting/video.mp4';
import {
  SiPython,
  SiFastapi,
  SiGooglecloud,
  SiPydantic,
  SiMongodb,
  SiYaml,
  SiDotenv,
  SiMarkdown,
  SiReact,
  SiNodedotjs,
  SiOpenai
} from 'react-icons/si';
import { FaLock, FaShieldHalved } from 'react-icons/fa6';

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
    { name: 'Python', Icon: SiPython },
    { name: 'FastAPI', Icon: SiFastapi },
    { name: 'Google ADK', Icon: SiGooglecloud },
    { name: 'Pydantic', Icon: SiPydantic },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'PyYAML', Icon: SiYaml },
    { name: 'Python-dotenv', Icon: SiDotenv },
    { name: 'Passlib', Icon: FaLock },
    { name: 'Bcrypt', Icon: FaShieldHalved },
    { name: 'Markdown', Icon: SiMarkdown },
    { name: 'OpenAI API', Icon: SiOpenai },
    { name: 'NodeJS', Icon: SiNodedotjs },
    { name: 'React', Icon: SiReact }
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
