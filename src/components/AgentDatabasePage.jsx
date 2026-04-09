import Header from './Header';
import Footer from './Footer';
import AgentDetailTemplate from './AgentDetailTemplate';
import agentSuiteOne from '../assets/agentsuite1.jpg';
import agentSuiteTwo from '../assets/agentsuite2.jpg';
import agentSuiteFour from '../assets/agentsuite4.png';
import suiteVideo from '../assets/suite-03-database/video.mp4';

export default function AgentDatabasePage() {
  const features = [
    {
      name: 'Query Generation & Execution',
      description: 'Convert natural language requests into optimized database queries automatically.',
      icon: '🔍'
    },
    {
      name: 'Data Summarization',
      description: 'Transform complex database results into clear, actionable insights.',
      icon: '📈'
    },
    {
      name: 'Table Relationship Insights',
      description: 'Understand and traverse database relationships effortlessly.',
      icon: '🔗'
    },
    {
      name: 'Reporting & Analysis',
      description: 'Generate comprehensive reports and analysis from your data in seconds.',
      icon: '📊'
    }
  ];

  const galleryImages = [agentSuiteOne, agentSuiteTwo, agentSuiteFour];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AgentDetailTemplate 
          suiteNumber="03"
          title="Database Agent"
          description="Access your data intuitively with AI. This suite connects natural language requests with structured queries, helping teams extract insights without technical expertise."
          features={features}
          videoSrc={suiteVideo}
          galleryImages={galleryImages}
        />
      </main>
      <Footer />
    </div>
  );
}
