
import './App.scss';
import GlobalStyles from './style/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav'
import JobDescribeTrend from './components/JobDescribeTrend'
import { Route } from 'react-router-dom'

// TODO
// apply css transition at triggered chang tab
// remove console log with packaging library
// deployment to amplify


function App() {
  return (
    <>
    <GlobalStyles />
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Route exact path="/job-trend">
          <JobDescribeTrend />        
        </Route>
        <Route exact path="/soon">
          <div className="soon noselect">np
            <h1>예정중인 페이지입니다.</h1>
          </div>
        </Route>
      </div>
    </div>    
    </>
  );
}

export default App;
