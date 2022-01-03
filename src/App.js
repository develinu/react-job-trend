
import './App.scss';
import GlobalStyles from './style/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav'
import JobDescribeTrend from './components/JobDescribeTrend'





function App() {
  return (
    <>
    <GlobalStyles />
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <JobDescribeTrend />        
      </div>
    </div>    
    </>
  );
}

export default App;
