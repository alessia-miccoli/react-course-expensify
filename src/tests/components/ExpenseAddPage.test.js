import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseAddPage } from '../../components/ExpenseAddPage';
import expenses from '../fixture/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<ExpenseAddPage addExpense={addExpense} history={history} />);
});

test('should render add ExpenseAddPae correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});