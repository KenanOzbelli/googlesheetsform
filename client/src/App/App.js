import Form from '../pages/Form';
import DataTable from '../pages/DataTable';
import Home from '../pages/Home';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
       <Navigation />
       <div style={{marginTop:'7rem'}}></div>
      </header>
      <div className="pageOverlay"></div>
      <Fragment>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/datatable" component={DataTable} />
        </Switch>
      </Fragment>
    </div>
  );
}

export default App;
