import Footer from './Footer';
import AgentDetailTemplate from './AgentDetailTemplate';

import image1 from "../assets/suite-03-database/image1.png";
import image2 from "../assets/suite-03-database/image2.png";
import image3 from "../assets/suite-03-database/image3.png";
import image4 from "../assets/suite-03-database/image4.png";
import image5 from "../assets/suite-03-database/image5.png";
import image6 from "../assets/suite-03-database/image6.png";
import image7 from "../assets/suite-03-database/image7.png";
import image8 from "../assets/suite-03-database/image8.png";
import image9 from "../assets/suite-03-database/image9.png";

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

  const galleryImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

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
