import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixture/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}/>
  );
});

test('should rendere ExpenseListFilters correctly', () =>{
  expect(wrapper).toMatchSnapshot();
});

test('should rendere ExpenseListFilters with alt data correctly', () =>{
  wrapper.setProps({
    filters: altfilters
  });

  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () =>{
  const value = 'rent';

  wrapper.find('input').simulate('change', {
    target: { value }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () =>{
  const value = 'date';

  wrapper.setProps({
    filters: altfilters
  });

  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () =>{
  const value = 'amount';

  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () =>{
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');

  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () =>{
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
