import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';
import { ExpenseEditPage } from '../../components/ExpenseEditPage';

let editExpense, removeExpense, history, wrapper;

beforeEach(()=>{
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(
    <ExpenseEditPage 
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />);
});

test('should render EditExpensePage correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', ()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', ()=>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
}); 