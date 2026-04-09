import Header from './Header';
import Footer from './Footer';
import AgentDetailTemplate from './AgentDetailTemplate';
import image1 from '../assets/suite-01-hrm/image1.png';
import image2 from '../assets/suite-01-hrm/image2.png';
import image3 from '../assets/suite-01-hrm/image3.png';
import image4 from '../assets/suite-01-hrm/image4.png';
import image5 from '../assets/suite-01-hrm/image5.png';
import image6 from '../assets/suite-01-hrm/image6.png';
import image7 from '../assets/suite-01-hrm/image7.png';
import suiteVideo from '../assets/suite-01-hrm/video.mp4';

export default function AgentHRMRecruitmentPage() {
  const features = [
    {
      name: 'Resume Screening & Ranking',
      description: 'Intelligent AI-powered resume analysis that automatically screens candidates based on job requirements.',
      icon: '📄'
    },
    {
      name: 'AI Interview Assistant',
      description: 'Conduct voice-based interviews with advanced AI that evaluates candidate responses in real-time.',
      icon: '🎙️'
    },
    {
      name: 'Candidate Scoring Dashboard',
      description: 'Real-time dashboards showing candidate fit scores and detailed performance metrics.',
      icon: '📊'
    },
    {
      name: 'Workflow Automation',
      description: 'Automate the entire hiring pipeline from posting to offer generation.',
      icon: '⚙️'
    }
  ];

  const howToUse = [
    {
      role: 'For HR',
      steps: [
        'Register and create company profile',
        'Post jobs (manual or AI-generated)',
        'Review applications and resumes',
        'Run AI screening',
        'Schedule AI interviews',
        'Evaluate results and hire'
      ]
    },
    {
      role: 'For Candidates',
      steps: [
        'Create profile',
        'Apply for jobs',
        'Upload resume',
        'Attend AI voice interview',
        'Track results'
      ]
    }
  ];

  const galleryImages = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AgentDetailTemplate 
          suiteNumber="01"
          title="AI-Powered HRM & Recruitment System"
          description="Transform your hiring process with intelligent automation. This suite automates screening, interviews, and candidate evaluation while maintaining a seamless, enterprise-ready experience."
          features={features}
          howToUse={howToUse}
          videoSrc={suiteVideo}
          galleryImages={galleryImages}
        />
      </main>
      <Footer />
    </div>
  );
}
