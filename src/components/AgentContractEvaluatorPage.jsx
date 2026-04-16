import Header from './Header';
import Footer from './Footer';
import AgentDetailTemplate from './AgentDetailTemplate';
import image1 from '../assets/suite-02-contract/image1.png';
import image2 from '../assets/suite-02-contract/image2.png';
import image3 from '../assets/suite-02-contract/image3.png';
import image4 from '../assets/suite-02-contract/image4.png';
import image5 from '../assets/suite-02-contract/image5.png';
import image6 from '../assets/suite-02-contract/image6.png';
import image7 from '../assets/suite-02-contract/image7.png';

import suiteVideo from '../assets/suite-02-contract/video.mp4';
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

export default function AgentContractEvaluatorPage() {
  const features = [
    {
      name: 'Contract Clause Analysis',
      description: 'Automatically scan and analyze contract clauses for risk, compliance, and business impact.',
      icon: '📋'
    },
    {
      name: 'Vendor Performance Scoring',
      description: 'Evaluate vendor performance using historical data and quality metrics.',
      icon: '⭐'
    },
    {
      name: 'Risk & Compliance Summaries',
      description: 'Get actionable insights on compliance signals and potential risks.',
      icon: '🛡️'
    },
    {
      name: 'Decision Recommendations',
      description: 'Receive structured recommendations to guide procurement and vendor decisions.',
      icon: '✅'
    }
  ];

  const howItWorks = [
    {
      id: 1,
      title: 'Data Ingestion',
      copy: 'The system loads vendor-specific data from structured (CSV/JSON) and unstructured (Markdown/TXT) files.'
    },
    {
      id: 2,
      title: 'Specialized Analysis',
      points: [
        'Performance Agent: Calculates KPI scores (Uptime, Response Time, Resolution Speed).',
        'Risk Agent: Identifies systemic failures, preventable incidents, and business impact.'
      ]
    },
    {
      id: 3,
      title: 'Synthesis and Reasoning',
      copy: 'The Reasoning Agent performs a Deep Dive analysis, weighing the metric scores against qualitative reviews and industry benchmarks to detect nuances that simple formulas might miss.'
    },
    {
      id: 4,
      title: 'Orchestration',
      copy: 'A Central Orchestrator manages the flow, ensuring each agent contributes its findings to a final Decision Report.'
    },
    {
      id: 5,
      title: 'Output',
      copy: 'The system produces a comprehensive evaluation including an Overall Grade (A-F), a specific Recommendation (Renew/Monitor/Terminate), and a detailed justification.'
    }
  ];

  const galleryImages = [image1, image2, image3, image4, image5, image6, image7];

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
          suiteNumber="02"
          title="Contract Evaluator Agent"
          description="Make smarter procurement decisions with AI-powered contract analysis. This suite evaluates vendor and contract data to highlight risks, quality issues, and business impact."
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
