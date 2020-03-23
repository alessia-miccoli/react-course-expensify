import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '', 
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});

  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {type: 'SORT_BY_DATE'};
  const state = filterReducer(currentState, action);

  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'This is my filter';
  const currentState = {
    text,
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };

  const state = filterReducer(currentState, {type: 'SET_TEXT_FILTER', text});
  expect(state.text).toBe(text);
});

test('should set start date filter', () => {
  const startDate = moment(0);
  const currentState = {
    text: '',
    startDate,
    endDate: undefined,
    sortBy: 'date'
  };

  const state = filterReducer(currentState, {type: 'SET_START_DATE', startDate});
  expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
  const endDate = moment(0);
  const currentState = {
    text: '',
    startDate: undefined,
    endDate,
    sortBy: 'date'
  };

  const state = filterReducer(currentState, {type: 'SET_END_DATE', endDate});
  expect(state.endDate).toBe(endDate);
});