import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Addcampaign } from './components/AddCampaign';
import { Editcampaign } from './components/EditCampaign';

import { GlobalProvider } from './context/GlobalState';

export const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/add" component={Addcampaign} exact />
          <Route path="/edit/:id" component={Editcampaign} exact />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}
