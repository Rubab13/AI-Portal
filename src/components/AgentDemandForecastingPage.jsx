import Footer from '../ui/footer/Footer';

import AgentDetailTemplate from './AgentDetailTemplate';

import image1 from '../assets/suite-04-forecasting/image1.png';
import image2 from '../assets/suite-04-forecasting/image2.png';
import image3 from '../assets/suite-04-forecasting/image3.png';
import image4 from '../assets/suite-04-forecasting/image4.png';
import image5 from '../assets/suite-04-forecasting/image5.png';
import image6 from '../assets/suite-04-forecasting/image6.png';
import image7 from '../assets/suite-04-forecasting/image7.png';
import image8 from '../assets/suite-04-forecasting/image8.png';
import image9 from '../assets/suite-04-forecasting/image9.png';
import image10 from '../assets/suite-04-forecasting/image10.png';
import image11 from '../assets/suite-04-forecasting/image11.jfif';
import image12 from '../assets/suite-04-forecasting/image12.png';
import image13 from '../assets/suite-04-forecasting/image13.png';
import image14 from '../assets/suite-04-forecasting/image14.png';
import image15 from '../assets/suite-04-forecasting/image15.png';
import image16 from '../assets/suite-04-forecasting/image16.png';
import image17 from '../assets/suite-04-forecasting/image17.png';

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

  const howItWorks = [
    {
      id: 1,
      title: 'User Sign Up',
      copy: 'Users create an account and securely log in to access the Demand Forecasting workspace.'
    },
    {
      id: 2,
      title: 'Set Up Connections',
      copy: 'From the Connections module, users link their data sources such as Business Central, MongoDB, or other supported systems.'
    },
    {
      id: 3,
      title: 'Load and Explore Data',
      copy: 'Connected databases are synced and prepared so teams can review sales history, trends, and operational context in one place.'
    },
    {
      id: 4,
      title: 'Run AI-Powered Analysis',
      copy: 'Users can use specialized agents to perform sales analysis and detect demand patterns directly on the connected data.'
    },
    {
      id: 5,
      title: 'Generate Forecasts and Predictions',
      copy: 'The suite produces demand forecasts and predictive insights to support planning, inventory decisions, and proactive business actions.'
    }
  ];

  const galleryImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17];

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
          howItWorks={howItWorks}
          videoSrc={suiteVideo}
          galleryImages={galleryImages}
          techStack={techStack}
        />
      </main>
      <Footer />
    </div>
  );
}
