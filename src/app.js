import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const ExpenseAddPage = () => (
  <div>This is from my add expense component</div>
);

const ExpenseEditPage = () => (
  <div>This is from my edit expense component</div>
);

const ExpenseHelpPage = () => (
  <div>This is from my help expense component</div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={ExpenseDashboardPage} />
      <Route exact={true} path="/create" component={ExpenseAddPage} />
      <Route exact={true} path="/edit" component={ExpenseEditPage} />
      <Route exact={true} path="/help" component={ExpenseHelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));