import './App.scss';
import GlobalStyles from './GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav'
import DateDropdown from './components/DateDropdown';
import Tab from './components/Tab'
import AnalysisDescribe from './components/AnalysisDescribe';
import AnalysisCharts from './components/AnalysisCharts';

import { jobs } from './data/JobInfo'


function App() {
  return (
    <>
    <GlobalStyles />
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <section className="job-filter">
          <DateDropdown />
          <Tab jobs={jobs} />
        </section>
        <section className="job-intro">
          <AnalysisDescribe />
        </section>
        <section className="charts">
          <AnalysisCharts />
        </section>
      </div>
    </div>    
    </>
  );
}

export default App;
