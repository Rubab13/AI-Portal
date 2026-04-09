import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AgentHRMRecruitmentPage from './components/AgentHRMRecruitmentPage';
import AgentContractEvaluatorPage from './components/AgentContractEvaluatorPage';
import AgentDatabasePage from './components/AgentDatabasePage';
import AgentDemandForecastingPage from './components/AgentDemandForecastingPage';
import ClickSpark from './components/ClickSpark';
import './theme.css';
import './App.css';

function App() {
  return (
    <ClickSpark
      sparkColor="#dc1f26"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents/hrm-recruitment" element={<AgentHRMRecruitmentPage />} />
          <Route path="/agents/contract-evaluator" element={<AgentContractEvaluatorPage />} />
          <Route path="/agents/database-agent" element={<AgentDatabasePage />} />
          <Route path="/agents/demand-forecasting" element={<AgentDemandForecastingPage />} />
        </Routes>
      </Router>
    </ClickSpark>
  );
}

export default App;
