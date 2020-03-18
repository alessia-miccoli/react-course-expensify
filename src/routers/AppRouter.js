import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseAddPage from '../components/ExpenseAddPage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route exact={true} path="/create" component={ExpenseAddPage} />
        <Route exact={true} path="/edit" component={ExpenseEditPage} />
        <Route exact={true} path="/help" component={ExpenseHelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;